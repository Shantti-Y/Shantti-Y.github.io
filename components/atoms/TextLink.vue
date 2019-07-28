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
    color: #00ff9f;
    text-decoration: none;
    font-size: 20px;
  }

  @media all and (max-width: 959px) {
    .text-link {
      display: block;
      margin-bottom: 36px;
    }
  }

  @media all and (min-width: 960px) {
    .text-link {
      margin-right: 50px;
    }
  }
</style>