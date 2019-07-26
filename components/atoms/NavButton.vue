<template>
  <a class="nav-button" :class="classNames" :to="to">
    {{ text }}
  </a>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Mixins } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';

@Component
export default class NavButton extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly to;
  @Prop({ type: String, required: true }) readonly text;
}
</script>
<style lang="scss">
.nav-button {
  font-size: 24px;
  font-weight: bold;
  color: #00ff9f;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 168px;
  height: 60px;
  background-color: #020028;

  &:hover {
    cursor: pointer;
    background-color: #00ff9f;
    color: #020028;
    transition: .3s;
  }
}
</style>