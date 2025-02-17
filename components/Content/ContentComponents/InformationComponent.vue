<script setup>
import InformationContent from "./InformationContent.vue";
import { textObj } from "../consts/TextContent";
import GridNewsComponent from "./GridNewsComponent.vue";
</script>

<template>
  <section class="information_container">
    <img src="/public/png/InformationSide.png" class="information_img" />
    <div class="information_news">
      <InformationContent
        v-for="item in textObj"
        :key="item.id"
        :header="item.header"
        :svg="item.svg"
        :text_1="item.text_1"
        :text_2="item.text_2"
        :button_text="item.button_text"
      />
      <GridNewsComponent />
    </div>
  </section>
</template>

<style scoped lang="scss">
.information_container {
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: 150px;

  .information_img {
    width: 72px;
    margin-top: 8px;
  }

  .information_news {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-around;
    gap: 126px;
  }
}
</style>
