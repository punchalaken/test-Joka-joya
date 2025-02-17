<script setup></script>

<template>
  <section class="second-block">
    <img
      src="/public/png/SecondBlock1.png"
      alt="joki-joya"
      class="second-block_image-1"
    />
    <img
      src="/public/png/SecondBlock2.png"
      alt="joki-joya"
      class="second-block_image-2"
    />
  </section>
</template>

<style lang="scss" scoped>
.second-block {
  max-width: var(--main-width);
  width: 100%;

  margin-top: 40px;

  display: flex;
  justify-content: space-between;

  .second-block_image-1 {
    max-width: calc(var(--main-width) - 285px);
    height: 62px;
  }

  .second-block_image-2 {
    width: 144px;
    aspect-ratio: 1;
  }
}
</style>
