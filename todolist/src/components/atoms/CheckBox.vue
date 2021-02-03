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
@import "@/assets/styles/color";


.checkbox {
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  margin: 0.25rem;
}
input[type="checkbox"]:checked ~ span  {
  text-decoration: line-through;
  color: $gray;
}
</style>