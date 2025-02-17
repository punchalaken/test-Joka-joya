<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
</script>

<template>
  <div class="swiper-container">
    <swiper
      :modules="[Navigation, Pagination]"
      :pagination="{ el: '.custom-pagination', clickable: true }"
      :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
    >
      <swiper-slide
        ><img src="/public/png/SwiperContent.png" alt="Фото парка"
      /></swiper-slide>
      <swiper-slide
        ><img src="/public/png/SwiperContent.png" alt="Фото парка"
      /></swiper-slide>
      <swiper-slide
        ><img src="/public/png/SwiperContent.png" alt="Фото парка"
      /></swiper-slide>
      <swiper-slide
        ><img src="/public/png/SwiperContent.png" alt="Фото парка"
      /></swiper-slide>
    </swiper>

    <div class="custom-pagination"></div>
    <button class="custom-prev arrow">
      <img src="/public/svg/swiper/left.svg" alt="" />
    </button>
    <button class="custom-next arrow">
      <img src="/public/svg/swiper/right.svg" alt="" />
    </button>
  </div>
</template>

<style lang="scss">
.swiper-container {
  position: relative;

  .swiper {
    max-width: 1024px;
    width: 100%;
    max-height: 784px;
    height: 100%;
    cursor: pointer;
    --swiper-navigation-size: 30px;
    --swiper-navigation-color: #000000;

    .swiper-slide {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .custom-prev {
    left: -88px;
    background: #0267ff;
  }
  .custom-next {
    background: #abec20;
  }

  .custom-pagination {
    position: absolute;
    bottom: 48px;
    left: 160px;
    z-index: 100;
    display: flex;
    gap: 32px;
    width: 400px;

    & > .swiper-pagination-bullet {
      width: 16px;
      height: 16px;
      background: #abec20;
      border-radius: 16px;
      opacity: 1;
      transition: width 300ms;
    }

    & > .swiper-pagination-bullet-active {
      background: #abec20;
      width: 64px;
      height: 16px;
    }
  }

  .arrow {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 88px;
    height: 80px;
    bottom: 48px;
    z-index: 100;

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
}
</style>
