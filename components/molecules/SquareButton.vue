<template>
<button
  class="round-button"
  :class="[...classNames, { clicked: clicked }]"
  :style="iconStyle"
  @click="handleClicked"
>
  <ion-icon :icon="icon" :fontSize="size" />
</button>
</template>

<script lang="ts">
import { Component, Prop, Emit, Mixins } from 'vue-property-decorator';
import { setTimeout } from 'timers';

import IonIcon from '@/components/atoms/IonIcon.vue';
import ClassName from '@/components/atoms/ClassName';

enum Transition {
  Inactive, Active
}

@Component({
  components: {
    IonIcon
  }
})
export default class SquareButton extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly icon;
  @Prop({ type: String, required: false, default: 'transparent' }) readonly color;
  @Prop({ type: Number, required: false, default: 30 }) readonly size;

  clicked = false;

  get iconStyle(){
    return {
      width: `${this.size + 25}px`,
      fontSize: `${this.size}px`,
      background: this.color
    }
  }

  @Emit('click')
  handleClicked(){
    if(this.clicked) return;
    setTimeout(() => {
      this.clicked = false
    }, 500);
    this.clicked = true;
  }
}
</script>
<style scoped lang="scss">
@keyframes shadow-pulse
{
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
}

.round-button {
  padding: 5px 5px;
  display: block;
  border: none;
  text-align: center;
  outline: none;
  &:hover {
    cursor: pointer;
    background: #dedede !important;
    transition: .5s;
    opaicty: 1.0 !important;
  }
}

.clicked {
  animation: shadow-pulse .3s;
}
</style>