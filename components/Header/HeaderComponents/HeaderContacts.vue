<script setup lang="ts">
import { headerContacts } from "../consts/Contacts";

interface Contacts {
  locate: string;
  tel: string;
}

const { locate, tel }: Contacts = headerContacts;
</script>

<template>
  <div class="header_contacts">
    <button type="button" class="header_custom">
      <img src="/svg/header/locate.svg" alt="Где вы находитесь?" />
      <span>{{ locate }}</span>
    </button>
    <a :href="`tel:${tel}`" class="header_custom number">
      <img src="/svg/header/phone.svg" alt="Позвонить" />
      <span>{{ tel }}</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.header_contacts {
  @include flex-center;
  gap: 16px;
  justify-content: space-between;

  color: var(--header-contacts-color);

  .header_custom {
    height: 40px;
    padding-inline: 16px;

    @include flex-center;
    gap: 8px;

    border: 2px solid var(--header-contacts-color);
    border-radius: 30px;
    color: inherit;

    transition: border-color 300ms;
    text-transform: uppercase;

    @media screen and (hover: hover) {
      &:hover {
        cursor: pointer;
        border-color: var(--hover-color);
      }
    }
  }

  .number {
    font-family: "DrukWideCyr", sans-serif;
    font-size: 13px;
  }
}
</style>
