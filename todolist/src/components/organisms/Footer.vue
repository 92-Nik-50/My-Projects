<template>
  <div :class="$style.footer">
    <Button @click="allList(allListButton)" type="submit">Все</Button>
    <Button @click="activeList" type="submit">Aктивные</Button>
    <Button @click="completedList" type="submit">Завершенно</Button>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button.vue";

import {mapGetters} from "vuex"

export default {
  name: "Footer",
  components: { Button },
  computed: mapGetters(["allListButton"]),
  methods:{
    allList(){
      console.log(this.allListButton)
    },
    activeList(){

    },
    completedList(){

    }
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/styles";
@import "@/assets/styles/color";

.footer {
  display: flex;
  border-top: $bordet-top;
  padding-top: 0.375rem;
  font-size: 1.25rem;
  margin-top: 0.375rem;
  margin-bottom: 0.875rem;
  .active {
    background: $green;
  }
}
</style>