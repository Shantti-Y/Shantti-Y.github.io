<template>
  <a class="text-link" :class="classNames" :href="path">{{ text }} -></a>
</template>
<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';

@Component
export default class TextLink extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly text;
  @Prop({ type: String, required: true }) readonly path;
}
</script>
<style lang="scss" scoped>
  .text-link {
    color: #00ff9f;
    text-decoration: none;
  }
</style>