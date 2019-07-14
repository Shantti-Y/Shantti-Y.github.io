<template>
  <div class="page-container" :class="[classNames]">
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
  .page-container {
    
  }
</style>

