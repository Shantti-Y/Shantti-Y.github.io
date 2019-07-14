<template>
<transition name="fade">
  <div v-if="isOpened" class="background" @click="e => handleClick(e)">
    <slot />
  </div>
</transition>
</template>

<script lang="ts">
import { Component, Prop, Emit, Mixins, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import ClassName from '@/components/atoms/ClassName';

@Component
export default class DialogBackground extends Mixins(ClassName) {
  @Getter('workDialog/isOpened') readonly isOpened;
  @Action('workDialog/closeComponent') readonly closeComponent;

  @Emit()
  handleClick(e){
    if(this.$el === e.target) this.closeComponent();
  }
}
</script>
<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.6);
  z-index: 20;
}
</style>