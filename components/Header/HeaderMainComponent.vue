<script setup>
import BurgerMenu from "./HeaderComponents/BurgerMenu.vue";
import HeaderBye from "./HeaderComponents/HeaderBye.vue";
import HeaderContacts from "./HeaderComponents/HeaderContacts.vue";
</script>

<template>
  <header class="header">
    <div class="header_container">
      <img src="public/svg/header/joki.svg" alt="Логотип компании" />
      <div class="header_buttons_container">
        <HeaderContacts />
        <HeaderBye />
      </div>
      <BurgerMenu />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: var(--header-height);
  background: var(--header-bg);

  position: fixed;
  top: 0;
  z-index: 100;

  font-family: "DrukCyr", sans-serif;
  font-size: 22px;
  line-height: 24px;
  letter-spacing: var(--letter-spacing);

  @include flex-center;

  .header_container {
    max-width: calc(1440px - 32px);
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 56px;

    padding-inline: 20px;

    .header_buttons_container {
      width: 100%;

      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
