<template>
  <div>
    <div :class="$style.panel">
      <label :class="$style.lable" for="id">
        <input
          id="id"
          :class="$style.checkBox"
          type="checkbox"
          @change="allcompleted"
          :checked="!anyRemaining"
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
    ...mapMutations(["allcompleted"]),
    allCheck() {
       this.allcompleted(event.target.checked);
    },
    anyRemaining() {
      return this.total != 0;
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
.panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $paddingS;
  border-top: $borderTop;
  font-size: $fontSizeP;
  .lable {
    cursor: $cursor;
  }
  .checkBox {
    cursor: $cursor;
    width: $fontSizeP;
    height: $fontSizeP;
    margin: $letterSpacing;
  }
}
</style>