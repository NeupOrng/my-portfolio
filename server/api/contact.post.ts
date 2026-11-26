// Receives the contact form and forwards it to Orng's Telegram bot.
// Needs NUXT_TELEGRAM_BOT_TOKEN and NUXT_TELEGRAM_CHAT_ID (see .env.example).

const LIMITS = { email: 254, topic: 120, body: 3500 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Small in-memory rate limit: 5 messages per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

type ContactBody = { email?: unknown; topic?: unknown; body?: unknown; website?: unknown }

export default defineEventHandler(async (event) => {
  const input = (await readBody<ContactBody>(event)) ?? {}

  // Honeypot: real visitors never see or fill this field.
  if (typeof input.website === 'string' && input.website.trim() !== '') {
    return { ok: true }
  }

  const email = typeof input.email === 'string' ? input.email.trim() : ''
  const topic = typeof input.topic === 'string' ? input.topic.trim() : ''
  const body = typeof input.body === 'string' ? input.body.trim() : ''

  const errors: Record<string, string> = {}
  if (!email) errors.email = 'Enter your email address.'
  else if (email.length > LIMITS.email || !EMAIL_RE.test(email)) errors.email = 'Enter a valid email address, like name@example.com.'
  if (!topic) errors.topic = 'Add a topic.'
  else if (topic.length > LIMITS.topic) errors.topic = `Keep the topic under ${LIMITS.topic} characters.`
  if (!body) errors.body = 'Write a message.'
  else if (body.length > LIMITS.body) errors.body = `Keep the message under ${LIMITS.body} characters.`
  if (Object.keys(errors).length) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid form', data: { errors } })
  }

  const ip = getRequestIP(event, { xForwardedFor: true }) ?? 'unknown'
  if (rateLimited(ip)) {
    throw createError({ statusCode: 429, statusMessage: 'Too many messages. Try again in a few minutes.' })
  }

  const { telegramBotToken, telegramChatId } = useRuntimeConfig(event)
  if (!telegramBotToken || !telegramChatId) {
    console.error('[contact] NUXT_TELEGRAM_BOT_TOKEN or NUXT_TELEGRAM_CHAT_ID is not set')
    throw createError({ statusCode: 503, statusMessage: 'The contact form is not set up yet.' })
  }

  // Plain text (no parse_mode) so nothing in the message can inject formatting.
  const text = [
    'New request from orngneup.dev',
    '',
    `From: ${email}`,
    `Topic: ${topic}`,
    '',
    body,
  ].join('\n')

  try {
    await $fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      body: { chat_id: telegramChatId, text, disable_web_page_preview: true },
      timeout: 8000,
    })
  } catch (error: any) {
    console.error('[contact] Telegram sendMessage failed:', error?.data?.description ?? error?.message)
    throw createError({ statusCode: 502, statusMessage: 'Could not deliver the message.' })
  }

  return { ok: true }
})
