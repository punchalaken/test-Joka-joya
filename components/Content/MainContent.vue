<script setup>
import InformationComponent from "./ContentComponents/InformationComponent.vue";
import MainPromoSlider from "./ContentComponents/MainPromoSlider.vue";
import SecondBlock from "./ContentComponents/SecondBlock.vue";
</script>

<template>
  <div class="content_wrapper">
    <SecondBlock />
    <InformationComponent />
  </div>
</template>

<style lang="scss" scoped>
.content_wrapper {
  max-width: var(--main-width);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 0.03rem;
}
</style>
