const isOpen: Ref<boolean> = ref(false);

function setOpen() {
  isOpen.value = !isOpen.value;
}

export { isOpen, setOpen };
