<template>
  <transition name="fade">
    <div v-if="opened" class="header-navigation">
      <ul>
        <li @click="() => handleClose(0)">HOME</li>
        <li @click="() => handleClose(1)">ABOUT</li>
        <li @click="() => handleClose(2)">WORK1</li>
        <li @click="() => handleClose(3)">WORK2</li>
        <li @click="() => handleClose(4)">WORK3</li>
        <li @click="() => handleClose(5)">WORK4</li>
        <li @click="() => handleClose(6)">CONTACT</li>
      </ul>
      <i class="ion-logo-github"></i>
      <i class="ion-logo-facebook"></i>
      <i class="ion-logo-linkedin"></i>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component
export default class Navigation extends Vue {
  @Prop({ type: Boolean, required: true }) readonly opened
  @Action('container/changeCurrentIdx') changeCurrentIdx

  @Emit('close')
  handleClose(idx){
    this.changeCurrentIdx(idx);
  }
}
</script>
<style scoped>
.header-navigation {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 100;
  opacity: 0.9;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>