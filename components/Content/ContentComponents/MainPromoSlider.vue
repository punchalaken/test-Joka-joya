<script setup>
import MainSlider from "./MainSlider.vue";
</script>

<template>
  <section class="main-promo-slider">
    <div class="main-promo-slider_container">
      <img
        src="/public/png/Slider-left.png"
        alt="Интерьеры парков"
        class="main-promo-slider__left-img"
      />
      <MainSlider />
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-promo-slider {
  width: 100%;
  display: flex;
  justify-content: center;

  background: white;
  .main-promo-slider_container {
    max-width: 1440px;
    width: 100%;

    padding-left: 113px;

    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .main-promo-slider__left-img {
    width: 126px;
    margin-bottom: 48px;
  }
}
</style>
