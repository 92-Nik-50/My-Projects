<template>
  <input
    type="text"
    :class="$style.input"
    placeholder="Добавить задачу..."
    :value="value"
    @input="(e) => $emit('input', e.target.value)"
    @keyup="$emit('keyup', $event)"
  />
</template>

<script>
export default {
  props: {
    value: String,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/styles";
.input {
  width: 97%;
  border-radius: 0.5rem;
  margin-bottom: 0.9375rem;
  font-size: 1.5625rem;
  padding: 0.3125rem;
}
</style>