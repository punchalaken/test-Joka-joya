<script setup>
import { scrollToUpp } from "../functions/ScrollToUpp";
</script>

<template>
  <button type="button" class="button_upp" @click="scrollToUpp">
    <span>Наверх</span> <img src="/svg/UppFooter.svg" alt="В начало страницы" />
  </button>
</template>

<style lang="scss" scoped>
.button_upp {
  width: 176px;
  height: 64px;
  border: 2px solid var(--footer-color);
  color: var(--footer-color);
  border-radius: 62px;

  @include flex-center;
  gap: 10px;

  transition: border-color 300ms;

  @media screen and (hover: hover) {
    &:hover {
      cursor: pointer;
      border-color: var(--hover-color);
    }
  }
}
</style>
