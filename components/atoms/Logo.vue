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
<style lang="scss">
  .logo {
    background-color: #ffffff;
  }
  @media all and (max-width: 599px){
    .logo {
      width: 90px;
      height: 90px;
    }
  }

  @media all and (min-width: 600px){
    .logo {
      width: 55px;
      height: 55px;
    }
  }
</style>