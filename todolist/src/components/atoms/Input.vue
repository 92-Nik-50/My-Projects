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
  width: $widthI;
  border-radius: $borderRadius;
  margin-bottom: $marginBotton;
  font-size: $fontSizeC;
  padding: $paddingI;
}
</style>