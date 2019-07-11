<template>
  <div
    id="root"
    @mousedown="e => handleMousedown(e)"
    @mouseup="e => handleMouseup(e)"
    @mousemove="e => handleMousemove(e)"
    @mouseleave="handleMouseleave"
  >
    <home-content />
    <about-content />
    <first-work-content  />
    <second-work-content />
    <third-work-content />
    <fourth-work-content />
    <contact-content />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import HomeContent from '@/components/Contents/Home.vue';
import AboutContent from '@/components/Contents/About.vue';
import FirstWorkContent from '@/components/Contents/Works/1.vue';
import SecondWorkContent from '@/components/Contents/Works/2.vue';
import ThirdWorkContent from '@/components/Contents/Works/3.vue';
import ContactContent from '@/components/Contents/Contact.vue';

@Component({
  components: {
    HomeContent,
    AboutContent,
    FirstWorkContent,
    SecondWorkContent,
    ThirdWorkContent,
    ContactContent
  }
})
export default class RootPage extends Vue {
  @Action('container/moveToNext') moveToNext
  @Action('container/moveToPrev') moveToPrev

  holded = false;
  startPositionY = 0;

  @Emit()
  diffFromStartY(clientY: number){
    return clientY - this.startPositionY;
  }

  @Emit()
  handleMousedown(e){
    const clientY = e instanceof TouchEvent ? e.touches[0].clientY : e.pageY;
    this.startPositionY = clientY;
    this.changeHolded(true);
  }

  @Emit()
  handleMouseup(){
    this.startPositionY = 0;
    this.changeHolded(false);
  }

  @Emit()
  handleMousemove(e){
    const clientY = e instanceof TouchEvent ? e.touches[0].clientY : e.pageY;
    if(this.holded && this.diffFromStartY(clientY) > 170){
      this.moveToNext();
      this.handleMouseup();
    }else if(this.holded && this.diffFromStartY(clientY) < -170){
      this.moveToPrev();
      this.handleMouseup();
    }
  }

  @Emit()
  handleMouseleave(){
    if(this.holded) this.handleMouseup();
  }

  @Emit()
  changeHolded(status){
    this.holded = status;
  }


  mounted(){
    this.$el.addEventListener('touchstart', e=> this.handleMousedown(e));
    this.$el.addEventListener('touchmove', e => this.handleMousemove(e));
    this.$el.addEventListener('touchend', this.handleMouseleave);
  }
}
</script>
<style scoped>
</style>