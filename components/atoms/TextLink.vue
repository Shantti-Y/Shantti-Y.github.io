<template>
  <nuxt-link class="text-link" :class="classNames" :to="path" :target="target">{{ text }} -></nuxt-link>
</template>
<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';

@Component
export default class TextLink extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly text;
  @Prop({ type: String, required: true }) readonly path;
  @Prop({ type: Boolean, required: false, default: false }) readonly external;

  get target(): string{
    return this.external ? `_blank` : ``;
  }
}
</script>
<style lang="scss" scoped>
  .text-link {
    text-decoration: none;
    font-size: 15px;
    color: inherit;
  }
</style>