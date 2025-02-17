<script setup>
import { leftSide } from "./consts/LeftSide";
</script>

<template>
  <div class="left-side">
    <div class="left-side_container">
      <div class="left-side-items">
        <span>Афиша</span
        ><img src="/public/svg/LeftSide.svg" alt="Раскрыть меню" />
      </div>
      <div class="left-side-items" v-for="item in leftSide" :key="item.id">
        <span>{{ item.text }}</span
        ><img src="/public/svg/LeftSide.svg" alt="Раскрыть меню" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left-side {
  height: 100%;
  width: 64px;
  writing-mode: sideways-lr;

  background-color: var(--left-side-bg);

  display: flex;
  justify-content: end;
  align-items: center;

  color: white;
  font-family: "DrukCyr";
  font-size: 24px;
  letter-spacing: var(--letter-spacing);

  z-index: 50;

  position: absolute;
  left: 0;

  .left-side_container {
    margin-top: 104px;

    display: flex;
    gap: 113px;

    .left-side-items {
      display: flex;
      align-items: center;
      gap: 13px;
      cursor: pointer;
    }
  }
}
</style>
