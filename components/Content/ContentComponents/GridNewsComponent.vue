<script setup>
import Button from "~/components/ui/Button.vue";
</script>

<template>
  <div class="news_container">
    <span class="news_text">jj \\\ facts</span>
    <div class="news_flex">
      <div class="card_item" v-for="item in 7" :key="item">
        <img src="/public/png/texture.png" alt="" class="card_png" />
        <div class="card_content">
          <div class="card_star">
            <img src="/public/svg/main/card-star.svg" alt="" />
            <img src="/public/svg/main/card-star.svg" alt="" />
          </div>
          <div class="text_container">
            <div class="card_text">
              <h2 class="card_header">26</h2>
              <span class="card_span">парков</span>
            </div>
            <Button>Посмотреть адреса</Button>
          </div>
          <div class="card_star">
            <img src="/public/svg/main/card-star.svg" alt="" />
            <img src="/public/svg/main/card-star.svg" alt="" />
          </div>
          <img src="/public/png/castle.png" class="card_png_right" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news_container {
  max-width: 1064px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 16px;

  padding-bottom: 106px;

  .news_text {
    writing-mode: sideways-lr;
    font-family: "DrukWideCyr";
    font-size: 11px;
  }

  .news_flex {
    display: flex;
    flex-wrap: wrap;
    max-width: 1232px;

    .card_item {
      width: 344px;
      height: 240px;
      background-color: rgb(171, 236, 32);
      display: flex;
      position: relative;

      .card_png {
        width: 100%;
        height: 100%;
        opacity: 0.2;
        position: absolute;
      }

      .card_content {
        height: 100%;
        width: 100%;

        padding: 16px;

        display: flex;
        justify-content: space-between;

        .text_container {
          height: 100%;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          padding: 16px 0 8px 0;
          z-index: 50;

          .card_header {
            font-family: "DrukCyr";
            font-size: 54px;
            font-weight: 500;
            line-height: 38px;
          }
          .card_span {
            font-family: "DrukWideCyr";
            font-size: 13px;
          }
        }

        .card_star {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card_png_right{
            position: absolute;
            width: 184px;
            height: 100%;
            top: 0;
            right: 0;
        }
      }
    }
  }
}
</style>
