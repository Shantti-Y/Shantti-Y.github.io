<template>
  <i :class="[...classNames, fontName]" class="ion-icon icon" :style="sizeStyle" />
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import ClassName from '@/components/atoms/ClassName';

@Component
export default class IonIcon extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly icon;
  @Prop({ type: Number, required: false, default: 16 }) readonly fontSize;

  get fontName(){
    return `ion-${this.icon}`;
  }

  get sizeStyle(){
    return {
      'font-size': `${this.fontSize}px`
    }
  }
}
</script>
<style scoped>
</style>