<template>
  <div class="error_page">
    <h1 class="error_404">404 - page not found</h1>
    <span>ooops! The page you'r looking doesn't exist or has been moved.</span>
    <nuxt-link to="/" class="error_link">На главную страницу</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.error_page {
  width: 100vw;
  height: 100vh;

  @include flex-center;
  flex-direction: column;
  gap: 20px;

  .error_404 {
    font-size: 40px;
    color: red;
  }

  .error_link {
    border: 1px solid var(--color-404);
    background: var(--color-404);
    padding: 20px;
  }
}
</style>
