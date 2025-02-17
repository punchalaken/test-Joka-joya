<script setup>
const { color } = defineProps({
  color: {
    type: String,
    default: "black",
    validator(value) {
      return value === "black" || value === "white";
    },
  },
});
</script>

<template>
  <button
    type="button"
    class="button"
    :style="{ color: color, borderColor: color }"
  >
    <slot></slot>
    <img
      src="/public/svg/main/arrowBlack.svg"
      alt=""
      v-if="color === 'black'"
    />
    <img src="/public/svg/main/arrowWhite.svg" alt="" v-else />
  </button>
</template>

<style scoped lang="scss">
.button {
  width: 215px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border: 2px solid;
  border-radius: 48px;

  font-family: "DrukCyr";
  font-size: 22px;
  letter-spacing: 0.03rem;

  text-transform: uppercase;

  @media screen and (hover: hover) {
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
    }
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
}
</style>
