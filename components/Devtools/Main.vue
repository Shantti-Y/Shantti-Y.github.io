<template>
  <div
    class="devtools"
    @mousedown="e => handleMousedown(e)"
    @mouseup="handleMouseup"
    @mousemove="e => handleMousemove(e)"
    @mouseleave="handleMouseup"
  >
    <devicon v-for="(icon, idx) in icons" :key="idx" :name="icon.name" :fontType="icon.fontType" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import Devicon from '@/components/Devtools/Devicon.vue'

@Component({
  components: {
    Devicon
  }
})
export default class Devtools extends Vue {
  @Prop({ type: Array, required: true, default: [] }) readonly icons;

  active = false;
  clickedX = 0;
  scrollLeft = 0;

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
}
</script>
<style>
.devtools {
  margin-top: 16px;
}
@media all and (max-width: 900px){
  .devtools {
    width: 100%;
    height: 50px;
    overflow-x: scroll;
    white-space: nowrap;
  }
}
</style>