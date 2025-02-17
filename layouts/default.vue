<template>
  <div class="wrapper">
    <HeaderMainComponent />
    <slot />
    <FooterMainComponent />
  </div>
</template>

<style scope>
.wrapper {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
