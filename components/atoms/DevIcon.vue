<template>
  <i :class="[...classNames, fontName, coloredClass]" class="dev-icon" :style="sizeStyle" />
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import ClassName from '@/components/atoms/ClassName';

@Component
export default class Devicon extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly icon;
  @Prop({ type: String, required: true }) readonly fontType;
  @Prop({ type: Number, required: false, default: 16 }) readonly fontSize;
  @Prop({ type: Boolean, required: false, default: false }) readonly colored;

  get fontName(){
    return `devicon-${this.icon}-${this.fontType}`;
  }

  get sizeStyle(){
    return {
      'font-size': `${this.fontSize}px`
    }
  }

  get coloredClass(){
    return this.colored ? `colored` : ``;
  }
}
</script>
<style scoped>
</style>