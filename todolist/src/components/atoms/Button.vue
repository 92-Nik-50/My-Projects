<template>
  <button :class="$style.button" @click="$emit('click')">
    <slot />
  </button>
</template>

<style lang="scss" module>
@import "@/assets/styles/styles";
button {
  cursor: $cursor;
  font-size: $fontSizeB;
  background-color: $beckgroundColorB;
  appearance: none;
  margin: $paddingS;

  &:hover {
    background: $beckgroundColorH;
  }

  &:focus {
    outline: none;
  }
}
</style>
