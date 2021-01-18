<template>
  <div :class="$style.footer">
    <div>
      <Button  type="submit" :class="{ active: filter == 'all' }" @click="filter = 'all'">Все</Button>
      <Button type="submit">Aктивные</Button>
      <Button type="submit">Завершенно</Button>
    </div>
    <div>
      <Button type="submit">Очистить отмеченные</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button.vue";
export default {
  name: "Footer",
  components: { Button },
  data(){
    return{
      filter: "all"
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/styles/styles";
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: $borderTop;
  padding-top: $paddingTop;
  font-size: $fontSizeP;
  margin-top: $paddingTop;
  margin-bottom: $marginLeft;
  .active{
    background: $beckgroundColorH;
  }
}
</style>