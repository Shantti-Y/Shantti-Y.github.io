<template>
  <div
    class="swiper"
  >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { setTimeout, clearTimeout } from 'timers';

@Component
export default class Container extends Vue {

  positionX = 0;
  positionY = 0;

  @Emit()
  initPosition(x: number, y: number){
    this.positionX = x;
    this.positionY = y;
  }
}
</script>
<style scoped>
.swiper {
  
}
</style>