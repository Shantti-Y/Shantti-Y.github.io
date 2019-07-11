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
    <font-awesome-icon :icon="['fa', 'chevron-down']" />
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component
export default class JointLink extends Vue {
  @Action('swiper/changePosition') syncPositionToComponent
  @Action('container/moveToNext') moveToNext

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
    if(this.position <= 100) this.handleMouseleave();
  }

  @Emit()
  handleMousedown(e){
    const clientY = e instanceof TouchEvent ? e.touches[0].clientY : e.pageY;
    this.diffFromLink = clientY - (window.innerHeight - this.position);
    this.changeHolded(true);
  }

  @Emit()
  handleMouseup(){
    this.position = 240;
    this.changeHolded(false);
  }

  @Emit()
  handleMousemove(e){
    const clientY = e instanceof TouchEvent ? e.touches[0].clientY : e.pageY;
    if(this.holded && (window.innerHeight - clientY) + this.diffFromLink <= 240){
      this.position = (window.innerHeight - clientY) + this.diffFromLink;
    }
  }

  @Emit()
  handleMouseleave(){
    if(this.position <= 100) this.handleClick();
    if(this.holded) this.handleMouseup();
  }

  @Emit()
  changeHolded(status){
    this.holded = status;
  }

  @Emit()
  handleClick(){
    this.moveToNext();
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
    left: 16px;
    z-index: 100;
  }

  .backLeft {
    transition: .5s;
  }
</style>
