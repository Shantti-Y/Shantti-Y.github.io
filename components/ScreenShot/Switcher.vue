<template>
 <div class="screen-shot-switcher">
   <i class="ion-md-desktop" :class="{ active: currentDevice === `desktop` }" @click="handleClickDesktop" />
   <i class="ion-md-phone-portrait" :class="{ active: currentDevice === `mobile` }" @click="handleClickMobile" />
 </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class Switcher extends Vue {
  @Prop({ type: String, required: true }) readonly currentDevice;

 @Emit()
 handleClickDesktop(){
   this.handleChangeDevice('desktop');
 }

 @Emit()
 handleClickMobile(){
  this.handleChangeDevice('mobile');
 }

 @Emit('change')
 handleChangeDevice(divice: 'desktop' | 'mobile'){}
}
</script>
<style scoped>
.screen-shot-switcher {
  width: auto;
  margin-left: 20px;
}
i {
  min-width: 36px;
  font-size: 26px;
  padding: 8px 18px;
  background: #ababab;
  opacity: 0.8;
  display: inline-block;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 16px;
  transition: .2s
}

i:hover {
  background: #efefef;
  cursor: pointer;
  transition: .2s;
}

.active {
  background: #efefef;
}
</style>
