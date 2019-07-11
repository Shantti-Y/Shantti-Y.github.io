<template>
  <div
    class="screen-shot-carousel carousel"
    @mousedown="e => handleMousedown(e)"
    @mousemove="e => handleMousemove(e)"
    @mouseup="handleMouseup"
    @mouseleave="handleMouseup"
  >
    
    <figure class="screen-shot" v-for="(shot, idx) in currentScreenShots" :key="idx">
      <img class="shot-content" :src="shot" alt="shot">
    </figure>
    <switcher @change="device => changelCurrentDevice(device)" :currentDevice="currentDevice" />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import Switcher from '@/components/ScreenShot/Switcher.vue';

@Component({
  components: {
    Switcher
  }
})
export default class Carousel extends Vue {
  @Prop({ type: Array, required: true }) readonly screenShotsForDesktop;
  @Prop({ type: Array, required: true }) readonly screenShotsForMobile;

  active = false;
  clickedX = 0;
  scrollLeft = 0;
  currentDevice = 'desktop';

  get currentScreenShots(){
    return this.currentDevice === 'desktop' ? this.screenShotsForDesktop : this.screenShotsForMobile;
  }

  @Emit()
  handleMousedown(e){
    this.active = true;
    this.clickedX = e.pageX;
    this.scrollLeft = this.$el.scrollLeft;
  }

  @Emit()
  handleMousemove(e){
    e.preventDefault();
    if(!this.active) return;
    const movedX = (e.pageX - this.clickedX) * 2;
    this.$el.scrollLeft = this.scrollLeft - movedX;
  } 

  @Emit()
  handleMouseup(){
    this.active = false;
  }

  @Emit()
  changelCurrentDevice(device){
    this.currentDevice = device;
  }
}
</script>
<style>
.carousel {
  width: 100%;
  overflow-x: scroll;
  display: flex;
  position: relative;
  padding: 10px 0;
  margin-top: 16px;
}
.screen-shot-switcher {
  position: -webkit-sticky;
  position: sticky;
  bottom: 12px;
  right: 12px;
}
.screen-shot {
  display: inline-block;
  margin-right: 12px;
  height: 100%;
  max-height: 240px;
}
.shot-content {
  max-width: 480px;
  height: 100%;
  max-height: 240px;
}
</style>