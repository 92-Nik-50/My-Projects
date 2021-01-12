<template>
  <button :class="$style.button" @click="$emit('click')">
    <slot />
  </button>
</template>

<style lang="scss" module>
button {
  font-size: 0.875rem;
  background-color: white;
  appearance: none;
  margin: 3px;

  &:hover {
    background: lightgreen;
  }

  &:focus {
    outline: none;
  }
}
</style>
