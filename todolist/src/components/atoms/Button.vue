<template>
  <button  :class="$style.button"  @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
}
</script>

<style lang="scss" module>
@import "@/assets/styles/styles";
@import "@/assets/styles/color";

button {
  cursor: pointer;
  font-size: 0.875rem;
  background-color: $white;
  appearance: none;
  margin: 0.1875rem;

  &:hover {
    background: $green;
  }

  &:focus {
    outline: none;
  }
}
</style>
