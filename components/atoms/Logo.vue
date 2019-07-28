<template>
  <div class="logo" :class="classNames" />
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';

@Component
export default class Logo extends Mixins(ClassName) {
}
</script>
<style lang="scss" scoped>
  .logo {
    background-color: #ffffff;
  }
</style>