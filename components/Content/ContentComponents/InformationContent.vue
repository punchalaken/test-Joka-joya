<script setup>
import Button from "~/components/ui/Button.vue";

const { header, svg, text_1, text_2, button_text } = defineProps({
  header: String,
  svg: String,
  text_1: String,
  text_2: String,
  button_text: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="new_container">
    <div class="header_container">
      <h4 class="new_header">{{ header }}</h4>
      <img :src="`/svg/main/${svg}.svg`" />
    </div>
    <p class="content_text" v-html="text_1"></p>
    <p class="content_text">
      <span v-html="text_2"></span>
      <Button
        type="button"
        class="content_button"
        color="black"
        v-if="button_text"
      >
        посмотреть адреса
      </Button>
    </p>
  </div>
</template>

<style scoped lang="scss">
.new_container {
  max-width: 1040px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 103px;

  .header_container {
    width: 100%;
    max-width: 160px;

    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;

    .new_header {
      font-family: "DrukWideCyr";
      font-size: 13px;
      font-weight: 500;
      text-transform: uppercase;
    }
  }

  .content_text {
    max-width: 336px;
    height: 100%;

    font-family: "Nunito Sans";
    line-height: 22px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
