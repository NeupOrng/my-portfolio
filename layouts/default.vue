<template>
  <div class="min-h-screen">
    <a href="#main" class="skip-link caps">Skip to content</a>
    <BootLoader />
    <SiteHeader />
    <main id="main">
      <slot />
    </main>
    <SiteFooter />
    <StatusBar />
  </div>
</template>

<style scoped>
.skip-link {
  position: absolute;
  left: 1rem;
  top: -4rem;
  z-index: 60;
  padding: 0.75rem 1rem;
  background: var(--signal);
  color: var(--ink);
}
.skip-link:focus { top: 1rem; }
</style>
