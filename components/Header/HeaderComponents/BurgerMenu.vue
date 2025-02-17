<script setup lang="ts">
import { isOpen, setOpen } from "../consts/open";
</script>

<template>
  <div class="header__burger-menu" @click="setOpen">
    <button class="header__burger" :class="{ open: isOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <p class="header__span">Меню</p>
  </div>
</template>

<style lang="scss" scoped>
.header__burger-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40px;
  height: 40px;
  cursor: pointer;

  .header__burger {
    position: relative;
    border: none;
    width: 40px;
    height: 24px;
    cursor: pointer;

    span {
      position: absolute;
      width: 32px;
      height: 4px;
      background-color: var(--hover-color);
      left: 8px;
      transition:
        transform 0.5s,
        opacity 0.5s;

      &:nth-child(2) {
        display: flex;
        justify-content: end;
        width: 22px;
        left: 18px;
      }
    }

    :first-child {
      transform: translateY(-10px);
    }

    :last-child {
      transform: translateY(10px);
    }

    &.open span:nth-child(2) {
      opacity: 0;
    }

    &.open span:nth-child(1) {
      transform: translateY(0) rotate(45deg);
    }

    &.open span:nth-child(3) {
      transform: translateY(0) rotate(-45deg);
    }
  }

  .header__span {
    font-family: "Montserrat", sans-serif;
    font-size: 11px;
    font-weight: bold;

    text-transform: uppercase;
    color: var(--hover-color);
    line-height: 4px;
  }
}
</style>
