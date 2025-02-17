<script setup></script>

<template>
  <div class="header_bye">
    <a href="/" class="bye_button bye">Купить билеты</a>
    <a href="/" class="bye_button order">Заказать праздник</a>
  </div>
</template>

<style lang="scss" scoped>
.header_bye {
  @include flex-center;
  gap: 16px;

  .bye_button {
    @include flex-center;

    height: 40px;
    padding-inline: 32px;
    border: 0;
    border-radius: 30px;
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

  .bye {
    color: white;
    background: #f269af;
  }

  .order {
    background: #abec20;
  }
}
</style>
