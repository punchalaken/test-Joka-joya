<script setup>
const { tel, name } = defineProps({
  tel: String,
  name: String,
});
</script>

<template>
  <div class="container">
    <a class="footer_number" :href="`tel:${tel}`">{{ tel }}</a>
    <div class="footer_name">({{ name }})</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  font-family: "DrukWideCyr";
  font-size: 13px;

  .footer_number {
    color: var(--footer-number-color);
  }
}
</style>
