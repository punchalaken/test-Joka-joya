<script setup>
import { hrefValue } from "../consts/HrefsValue";
</script>

<template>
  <div class="footer_hrefs">
    <a
      v-for="item in hrefValue"
      :key="item.id"
      :href="item.href"
      target="_blank"
    >
      <img :src="item.src" :alt="item.alt" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.footer_hrefs {
  @include flex-center;

  max-width: 256px;
  width: 100%;
  justify-content: space-between;
}
</style>
