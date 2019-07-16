<template>
<input
  class="input-element"
  :class="[classNames]"
  type="text"
  v-model="syncedValue"
/>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Mixins } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';

@Component
export default class InputField extends Mixins(ClassName) {
  @PropSync('value', { type: String, required: true }) readonly syncedValue;
}
</script>
<style scoped lang="scss">
.input-element {
  display: block;
  width: 100%;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid #cccccc;
  font-size: 16px;
  height: 40px;

  &:focus {
    outline: none !important;
    border-bottom: 2px solid #bf360c;
    transition: .9s;
  }
}
</style>