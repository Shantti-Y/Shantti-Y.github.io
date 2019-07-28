<template>
  <div class="carousel">
    <div class="screen-shots" :style="screenShotsHeightStyle">
      <div class="slide-button prev" @click="slideToPrev">
        <ion-icon name="ios-arrow-back" :size="45" />
      </div>
      <div class="slide-button next" @click="slideToNext">
        <ion-icon name="ios-arrow-forward" :size="45" />
      </div>
      <figure
        class="shot"
        :class="{ 'with-slide-transition': isSlidable(idx) }"
        v-for="(shot, idx) in screenShots"
        :key="idx"
        :style="imagePositionStyle(idx)"
      >
        <work-image className="work-image" :src="shot.src" :alt="shot.alt" />
      </figure>
    </div>
    <div class="carousel-nav">
      <div
        v-for="(_, idx) in screenShots"
        :key="idx"
        class="carousel-nav-item"
        :class="{ active: isCurrentIdx(idx) }"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop, Emit } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import WorkImage from '@/components/atoms/WorkImage.vue';
import IonIcon from '@/components/atoms/IonIcon.vue';

enum Transition {
  Inactive, Active
}

@Component({
  components: {
    WorkImage,
    IonIcon
  }
})
export default class Carousel extends Mixins(ClassName) {
  @Prop({ type: Array, required: true }) readonly screenShots;
  currentShotIdx = 0;
  slideDirection = Transition.Inactive;
  elementWidth = 680;

  get screenShotsHeightStyle (): object {
    return {
      height: `${this.elementWidth * 0.66}px`
    };
  }

  get numberOfContent(){
    return Object.keys(this.$slots).length
  }
  get minShotIdx(){
    return 0;
  }
  get maxShotIdx(){
    return this.screenShots.length - 1;
  }
  get prevShotIdx(){
    return this.currentShotIdx === this.minShotIdx ? this.maxShotIdx : this.currentShotIdx - 1 ;
  }
  get nexrShotIdx(){
    return this.currentShotIdx === this.maxShotIdx ? this.minShotIdx : this.currentShotIdx + 1 ;
  }

  @Emit()
  handleWindowResize(){
    this.elementWidth = this.$el ? this.$el.clientWidth: this.elementWidth;
  }

  @Emit()
  isCurrentIdx(idx: Number){
    return idx === this.currentShotIdx;
  }
  @Emit()
  isSlidable(idx: number){
    return [this.prevShotIdx, this.nexrShotIdx, this.currentShotIdx].includes(idx);
  }
  @Emit()
  imagePositionStyle(idx: number): object {
    const imageLeftPosition = () => {
      const diff = idx - this.currentShotIdx;
      if(diff === -1 || diff === this.maxShotIdx){
        return `${-1 * this.elementWidth}px`;
      }else if(diff <= -2){
        return `${(diff + this.screenShots.length) * this.elementWidth}px`;
      }else{
        return `${diff * this.elementWidth}px`;
      }
    }
    return {
      left: imageLeftPosition()
    };
  }
  @Emit()
  slideToPrev(){
    if(this.slideDirection === Transition.Active) return;
    const newIdx = this.currentShotIdx - 1;
    this.currentShotIdx = newIdx < this.minShotIdx ? this.maxShotIdx : newIdx;
    this.slideDirection = Transition.Active;
    setTimeout(() => { this.slideDirection = Transition.Inactive; }, 400);
  }
  @Emit()
  slideToNext(){
    if(this.slideDirection === Transition.Active) return;
    const newIdx = this.currentShotIdx + 1;
    this.currentShotIdx = newIdx > this.maxShotIdx ? this.minShotIdx : newIdx;
    this.slideDirection = Transition.Active;
    setTimeout(() => { this.slideDirection = Transition.Inactive; }, 400);
  }

  mounted() {
    window.addEventListener('resize', () => {
      this.handleWindowResize();
    });
    this.handleWindowResize();
  }

  beforeDestroy() {
  window.removeEventListener('resize', () => { 
      this.handleWindowResize();
    });
  }
}
</script>
<style lang="scss" scoped>
  .carousel {
    width: 100%;
    max-width: 680px;
    margin: 0 auto;
    .screen-shots {
      width: 100%;
      position: relative;
      overflow-x: hidden;
      display: flex;

      .slide-button {
        position: absolute;
        width: 50px;
        height: 50px;
        justify-content: center;
        display: flex;
        align-items: center;
        background-color: rgba(239, 239, 239, 0.6);
        bottom: 10px;
        z-index: 10;
      }

      .prev {
        left: 0;
      }

      .next {
        right: 0;
      }

      .shot {
        position: absolute;
        display: flex;
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        z-index: 0;
      }
    }

    .carousel-nav {
      margin-top: 8px;
      text-align: center;
      width: 100%;
      .carousel-nav-item {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #cccccc;
        margin: 0 5px;
        transition: .3s;
      }
      .active {
        background: #565656;
      }
    }
  }
</style>