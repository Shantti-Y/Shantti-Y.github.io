<template>
  <span
    class="joint-link"
    :class="{ backLeft: !holded }"
    :style="componentStyle"
    @click="handleClick"
    @mousedown="e => handleMousedown(e)"
    @mouseup="e => handleMouseup(e)"
    @mousemove="e => handleMousemove(e)"
    @mouseleave="handleMouseleave"
  >
    <font-awesome-icon :icon="['fa', `chevron-up`]" />
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component
export default class JointLink extends Vue {
  @Action('swiper/changePosition') syncPositionToComponent
  @Action('container/changeSwipedIdx') changeSwipedIdx
  @Action('container/moveToPrev') moveToPrev

  holded = false;
  position = 16;
  diffFromLink = 0;

  get componentStyle(){
    return {
      bottom: `${this.position}px`
    }
  }

  @Watch('position')
  onPositionChanged(){
    if(this.position >= (window.innerWidth / 2)) this.handleMouseleave();
  }

  @Emit()
  handleMousedown(e){
    const clientY = e instanceof TouchEvent ? e.touches[0].clientX : e.pageX;
    this.diffFromLink = window.innerWidth - (clientY + this.position);
    this.changeHolded(true);
    this.changeSwipedIdx('prev')
  }

  @Emit()
  handleMouseup(){
    this.position = 16;
    this.changeHolded(false);
    this.syncPositionToComponent(0);
  }

  @Emit()
  handleMousemove(e){
    const clientX = e instanceof TouchEvent ? e.touches[0].clientX : e.pageX;
    if(this.holded && window.innerWidth - (clientX + this.diffFromLink) > 16){
      this.position = window.innerWidth - (clientX + this.diffFromLink);
      this.syncPositionToComponent(this.position);
    }
  }

  @Emit()
  handleMouseleave(){
    if(this.position >= (window.innerWidth / 2)) this.handleClick();
    if(this.holded) this.handleMouseup();
  }

  @Emit()
  changeHolded(status){
    this.holded = status;
  }

  @Emit()
  handleClick(){
    this.moveToPrev();
  }

  mounted(){
    this.$el.addEventListener('touchstart', e => this.handleMousedown(e));
    this.$el.addEventListener('touchmove', e => this.handleMousemove(e));
    this.$el.addEventListener('touchend', this.handleMouseleave);
  }
}
</script>
<style>
    /* These links below has to be independent component named like 'JointLink.vue' */
  .joint-link {
    position: absolute;
    z-index: 100;
  }

  .backLeft {
    transition: .5s;
  }
</style>


