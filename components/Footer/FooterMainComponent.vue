<script setup>
import FooterContacts from "./FooterComponents/FooterContacts.vue";
import FooterHrefs from "./FooterComponents/FooterHrefs.vue";
import FooterJoki from "./FooterComponents/FooterJoki.vue";
import UppButton from "./FooterComponents/UppButton.vue";
import { contactsValue } from "./consts/ContactsValue";
</script>

<template>
  <footer class="footer">
    <div class="footer_container">
      <img src="/svg/LogoFooter.svg" alt="Логотип компании" />
      <div class="footer_contacts">
        <FooterContacts
          v-for="item in contactsValue"
          :key="item.id"
          :tel="item.tel"
          :name="item.name"
        />
      </div>
      <FooterHrefs />
      <FooterJoki />
      <UppButton />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: var(--footer-height-pc);

  background: var(--footer-bg);

  color: var(--footer-color);

  letter-spacing: car(--letter-spacing);

  @include flex-center;

  .footer_container {
    max-width: 1216px;
    width: 100%;
    min-height: 64px;
    padding-inline: 20px;

    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 850px) {
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 30px;
    }
  }

  @media screen and (max-width: 850px) {
    height: auto;
    padding-block: 50px;
  }
}
</style>
