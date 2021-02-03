<template>
  <div>
    <div :class="$style.panel">
      <label :class="$style.lable" for="id">
        <input
          id="id"
          :class="$style.checkBox"
          type="checkbox"
          @change="allCheck($event.allCompleted)"
          :checked="checked.h"
        />
        Отметить всё
      </label>
      Список задач: {{ total }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Panel",
  computed: mapGetters(["total"]),
  methods: {
    ...mapMutations(["allCompleted"]),
    allCheck() {
      this.allCompleted(event.target.id );
    },
  },
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/styles";
@import "@/assets/styles/color";


.panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1875rem;
  border-top: $bordet-top;
  font-size: 1.25rem;
  .lable {
    cursor: pointer;
  }
  .checkBox {
    cursor: pointer;
    width: 1.25rem;
    height: 1.25rem;
    margin: 0.25rem;
  }
}
input[type="checkbox"]:checked ~ span {
  text-decoration: line-through;
  color: $darkGray;
}
</style>