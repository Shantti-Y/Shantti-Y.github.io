<template>
  <div class="timeline-point" :class="classNames" />
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';

@Component
export default class TimelinePoint extends Mixins(ClassName) {
}
</script>
<style lang="scss">
  .timeline-point {
    width: 14px;
    height: 14px;
    box-sizing: border-box;
    border: 2px solid #133E7C;
    background-color: #091833;
    border-radius: 14px;

  }
</style>