<script setup>
import MainPromoSlider from "~/components/Content/ContentComponents/MainPromoSlider.vue";
import LeftSide from "~/components/Content/LeftSide.vue";
import MainContent from "~/components/Content/MainContent.vue";
</script>

<template>
  <main class="main">
    <LeftSide />
    <div class="main_wrapper">
      <img
        src="/public/png/Main-Content.png"
        alt="Наши парки"
        class="main_prevue"
      />
    </div>
    <MainContent />
    <MainPromoSlider />
  </main>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: calc(100vh - var(--header-height) - var(--footer-height-pc));

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #e8e7e9;

  .main_wrapper {
    max-width: var(--main-width);

    .main_prevue {
      max-width: 1216px;
      width: 100%;
    }
  }
}
</style>
