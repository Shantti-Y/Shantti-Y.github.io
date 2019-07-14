<template>
  <div v-if="isOpened" class="dialog">
    <div class="header">
      <typography className="name" variant="h4" :text="name" />
      <typography className="role" variant="h5" :text="role" />
      <square-button className="close-button" icon="md-close" @click="closeComponent" />
    </div>
    <div class="body">
      <div class="screen-shot">
        <div class="carousel">
          <square-button
            className="slide-button prev"
            icon="ios-arrow-back"
            :size="45"
            color="#efefef"
            @click="slideToPrev" />
          <square-button
            className="slide-button next"
            icon="ios-arrow-forward"
            :size="45"
            color="#efefef"
            @click="slideToNext" />
          <figure
            class="shot"
            :class="{ 'with-slide-transition': isSlidable(idx) }"
            v-for="(shot, idx) in screenShots"
            :key="idx"
            :style="{ left: imagePositionStyle(idx) }"
          >
            <img :src="shot.src" :alt="shot.alt" />
          </figure>
        </div>
      </div>
      <div class="carousel-nav">
        <div
          v-for="(_, idx) in screenShots"
          :key="idx"
          class="carousel-nav-item"
          :class="{ active: isCurrentIdx(idx) }"
        />
      </div>
      <div class="contents">
        <slot v-for="idx in numberOfContent" :name="idx" />
      </div>
    </div>
    <footer class="footer">
      <website-link href="https://setlify-236901.appspot.com" />
      <github-repository-link href="https://github.com/Shantti-Y/Chalendiary" />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Mixins, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import { setTimeout } from 'timers';

import Typography from '@/components/atoms/Typography.vue';
import SquareButton from '@/components/molecules/SquareButton.vue';
import ClassName from '@/components/atoms/ClassName';
import GithubRepositoryLink from '@/components/molecules/GithubRepositoryLink.vue';
import WebsiteLink from '@/components/molecules/WebsiteLink.vue';

enum Transition {
  Inactive, Active
}

@Component({
  components: {
    Typography,
    SquareButton,
    GithubRepositoryLink,
    WebsiteLink
  }
})
export default class Dialog extends Mixins(ClassName) {
  @Prop({ type: Array, required: true }) readonly screenShots;
  @Prop({ type: Number, required: true }) readonly numberOfContent;
  @Prop({ type: String, required: true }) readonly name;
  @Prop({ type: String, required: true }) readonly role;
  @Getter('workDialog/isOpened') readonly isOpened;
  @Action('workDialog/closeComponent') readonly closeComponent;

  currentShotIdx = 0;
  slideDirection = Transition.Inactive;
  active = false;

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
  isCurrentIdx(idx: Number){
    return idx === this.currentShotIdx;
  }

  @Emit()
  isSlidable(idx: number){
    return [this.prevShotIdx, this.nexrShotIdx, this.currentShotIdx].includes(idx);
  }

  @Emit()
  imagePositionStyle(idx: number){
    const diffInPosition = () => {
      if(process.client){
        return window.innerWidth <= 600 ? window.innerWidth : 600;
      }
      return 600;
    };
    const diff = idx - this.currentShotIdx;
    if(diff === -1 || diff === this.maxShotIdx){
      return `${-1 * diffInPosition()}px`;
    }else if(diff <= -2){
      return `${(diff + this.screenShots.length) * diffInPosition()}px`;
    }else{
      return `${diff * diffInPosition()}px`;
    }
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
}
</script>
<style scoped lang="scss">
@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.with-slide-transition {
  transition: .4s;
  z-index: 1500 !important;
}
.dialog {
  position: absolute;
  width: 100%;
  max-width: 600px;
  min-height: 100%;
  background: #ffffff;

  .header {
    padding: 16px;
    position: sticky;
    top: 0;
    z-index: 10000;
    background: #ffffff;
    border-bottom: 1px solid #cccccc;

    .name {
      margin-bottom: 6px;
    }

    .role {
      color: #676767;
    }

    .close-button {
      position: absolute;
      right: 16px;
      top: 16px;
    }
  }

  .body {
    .contents {
      margin-top: 18px;
    }
  }

  .footer {
    border-top: 1px solid #cccccc;
    position: sticky;
    background: #ffffff;
    padding: 16px 12px;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    width: calc(100% - 1px);
  }
}

.screen-shot {
  width: 100%;
  overflow-x: hidden;
  position: relative;
  z-index: 1;

  .carousel {
    display: flex;
    position: absolute;
    z-index: -1;
    width: 100%;

    .shot {
      width: 100%;
      max-width: 600px;
      text-align: center;
      display: inline-block;
      position: absolute;
      background: black;
      z-index: 2;

      img {
        width: 100%;
        max-width: 600px;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .slide-button {
    position: absolute;
    z-index: 10000;
    background: #efefef;
    opacity: 0.6;
    bottom: 7px;
  }
  .prev {
    left: 0;
  }

  .next {
    right: 0;
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

@media all and (max-width: 599px){
  .dialog {
    left: 0;
  }
}
@media all and (min-width: 600px){
  .dialog {
    left: calc(50% - (600px / 2));
  }
}
@media all and (max-height: 629px){
  .screen-shot {
    height: 220px;
    .carousel {
      height: 220px;
      .shot {
        height: 213px;
      }
    }
  }
}
@media all and (min-height: 630px){
  .screen-shot {
    height: 320px;
    .carousel {
      height: 320px;
      .shot {
        height: 313px;
      }
    }
  }
}
</style>