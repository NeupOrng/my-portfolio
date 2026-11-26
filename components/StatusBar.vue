<template>
  <div class="statusbar on-ink mono" role="status" aria-live="polite">
    <div class="mx-auto flex h-full max-w-site items-center justify-between gap-4 px-5 md:px-10">
      <p class="flex items-center gap-3 truncate">
        <span class="dot" :class="{ pending }" aria-hidden="true" />
        <span class="text-muted">GET</span>
        <span class="truncate">{{ path }}</span>
        <span :class="pending ? 'text-muted' : 'text-signal'">{{ pending ? '…' : '200 OK' }}</span>
      </p>
      <p class="hidden text-muted sm:block">orngneup.dev // full-stack</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const pending = ref(false)
const path = computed(() => route.path)

router.beforeEach(() => { pending.value = true })
router.afterEach(() => { pending.value = false })
</script>

<style scoped>
.statusbar {
  position: fixed;
  inset: auto 0 0 0;
  z-index: 40;
  height: var(--statusbar-h);
  font-size: 0.75rem;
  border-top: 1px solid var(--line-ink);
}
.dot {
  width: 6px;
  height: 6px;
  flex: none;
  background: var(--signal);
}
.dot.pending { background: var(--on-ink-muted); }
</style>
