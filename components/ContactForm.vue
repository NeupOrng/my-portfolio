<template>
  <div class="hud p-6 md:p-10">
    <div v-if="status === 'sent'" class="sent" role="status">
      <p class="mono text-sm"><span class="text-signal">201</span> · sent</p>
      <h2 class="heading mt-6 text-[clamp(1.75rem,1.3rem+1.6vw,2.5rem)]">Request received.</h2>
      <p class="lede mt-4 text-muted">It’s on its way to my Telegram. I’ll reply to <span class="text-[var(--on-ink)]">{{ sentTo }}</span>.</p>
      <button type="button" class="btn btn-line mt-8" @click="reset">Send another</button>
    </div>

    <form v-else novalidate @submit.prevent="submit">
      <div class="field">
        <label for="cf-email">Your email</label>
        <input
          id="cf-email" v-model="form.email" type="email" name="email" autocomplete="email" inputmode="email"
          placeholder="name@example.com" maxlength="254" required
          :aria-invalid="!!errors.email" :aria-describedby="errors.email ? 'cf-email-error' : undefined"
        >
        <p v-if="errors.email" id="cf-email-error" class="field-error">{{ errors.email }}</p>
      </div>

      <div class="field">
        <label for="cf-topic">Topic</label>
        <input
          id="cf-topic" v-model="form.topic" type="text" name="topic" autocomplete="off"
          placeholder="Full-stack role, a product to build…" maxlength="120" required
          :aria-invalid="!!errors.topic" :aria-describedby="errors.topic ? 'cf-topic-error' : undefined"
        >
        <p v-if="errors.topic" id="cf-topic-error" class="field-error">{{ errors.topic }}</p>
      </div>

      <div class="field">
        <label for="cf-body">Message</label>
        <textarea
          id="cf-body" v-model="form.body" name="body" rows="6" maxlength="3500" required
          placeholder="What are you building, and where do I come in?"
          :aria-invalid="!!errors.body" :aria-describedby="errors.body ? 'cf-body-error' : 'cf-body-count'"
        />
        <p v-if="errors.body" id="cf-body-error" class="field-error">{{ errors.body }}</p>
        <p v-else id="cf-body-count" class="mono mt-2 text-right text-xs text-muted">{{ form.body.length }} / 3500</p>
      </div>

      <!-- Honeypot for bots; hidden from people and assistive tech. -->
      <div class="hp" aria-hidden="true">
        <label for="cf-website">Website</label>
        <input id="cf-website" v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off">
      </div>

      <div class="mt-8 flex flex-wrap items-center gap-5">
        <button type="submit" class="btn btn-signal" :disabled="status === 'sending'">
          {{ status === 'sending' ? 'Sending…' : 'Send request' }} <ArrowIcon v-if="status !== 'sending'" class="btn-arrow" />
        </button>
        <p v-if="formError" class="form-error" role="alert">{{ formError }}</p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
type Field = 'email' | 'topic' | 'body'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const form = reactive({ email: '', topic: '', body: '', website: '' })
const errors = reactive<Partial<Record<Field, string>>>({})
const status = ref<'idle' | 'sending' | 'sent'>('idle')
const formError = ref('')
const sentTo = ref('')

function validate(): boolean {
  for (const key of Object.keys(errors) as Field[]) delete errors[key]
  const email = form.email.trim()
  if (!email) errors.email = 'Enter your email address.'
  else if (!EMAIL_RE.test(email)) errors.email = 'Enter a valid email address, like name@example.com.'
  if (!form.topic.trim()) errors.topic = 'Add a topic.'
  if (!form.body.trim()) errors.body = 'Write a message.'
  return Object.keys(errors).length === 0
}

async function submit() {
  formError.value = ''
  if (!validate()) {
    const first = (['email', 'topic', 'body'] as Field[]).find((k) => errors[k])
    if (first) document.getElementById(`cf-${first}`)?.focus()
    return
  }
  status.value = 'sending'
  try {
    await $fetch('/api/contact', { method: 'POST', body: { ...form } })
    sentTo.value = form.email.trim()
    status.value = 'sent'
  } catch (error: any) {
    status.value = 'idle'
    const serverErrors = error?.data?.data?.errors as Partial<Record<Field, string>> | undefined
    if (serverErrors) Object.assign(errors, serverErrors)
    else formError.value = `${error?.data?.statusMessage ?? 'Something went wrong.'} You can also reach me on Telegram.`
  }
}

function reset() {
  Object.assign(form, { email: '', topic: '', body: '', website: '' })
  status.value = 'idle'
}
</script>

<style scoped>
.field + .field { margin-top: 1.75rem; }
.field label {
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--on-ink-muted);
}
.field input,
.field textarea {
  display: block;
  width: 100%;
  margin-top: 0.6rem;
  padding: 0.75rem 0;
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--line-ink);
  border-radius: 0;
  color: var(--on-ink);
  font-size: 1.125rem;
  line-height: 1.5;
  caret-color: var(--signal);
  transition: border-color 200ms var(--ease-out);
}
.field textarea { resize: vertical; min-height: 9rem; }
.field input::placeholder,
.field textarea::placeholder { color: #8a8b84; }
.field input:hover,
.field textarea:hover { border-bottom-color: var(--on-ink-muted); }
.field input:focus,
.field textarea:focus {
  outline: none;
  border-bottom-color: var(--signal);
  box-shadow: 0 1px 0 0 var(--signal);
}
.field input[aria-invalid="true"],
.field textarea[aria-invalid="true"] { border-bottom-color: #ff8a73; }
.field-error,
.form-error {
  margin-top: 0.5rem;
  color: #ff9d8a;
  font-size: 0.9375rem;
}
.form-error { margin-top: 0; max-width: 32rem; }
.hp {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
.btn:disabled { opacity: 0.6; cursor: progress; }
</style>
