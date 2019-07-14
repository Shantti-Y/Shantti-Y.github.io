<template>
  <div class="dialog-content-container" :class="[classNames]">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';

@Component
export default class DialogContentContainer extends Mixins(ClassName){}
</script>

<style lang="scss" scoped>
  .dialog-content-container {
    padding: 10px 16px;
    h1, h2, h3, h4, h5, h6 { margin: 20px 0; }
  }
</style>

