<template>
  <input
    type="checkbox"
    :class="$style.checkbox"

  />
</template>  

<script>
export default {};
</script>

<style lang="scss" module>
@import "@/assets/styles/styles";
.checkbox {
  cursor: $cursor;
  width: $fontSizeP;
  height: $fontSizeP;
  margin: $letterSpacing;
}
input[type="checkbox"]:iscompleted {
  text-decoration: line-through;
  color: #bbb;
}
</style>