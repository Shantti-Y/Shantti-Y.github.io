<template>
  <div>
    <div class="header-main">
      <div class="content full-name"><span>Takahiro Yoshioka</span></div>
      <div class="content menus" @click="() => changeOpened(true)">
        <i class="ion-md-menu nav"></i>
      </div>
    </div>
    <navigation :opened="navOpened" @close="() => changeOpened(false)" />
  </div>

</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import Navigation from '@/components/Header/Navigation.vue';

@Component({
  components: {
    Navigation
  }
})
export default class Header extends Vue {
  navOpened = false;

  @Emit()
  changeOpened(status){
    this.navOpened = status;
  }
}
</script>
<style scoped>
.header-main {
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 900px;
  z-index: 100;
  overflow: hidden;
  box-sizing: border-box;
}
.full-name {
  font-size: 20px;
  margin-top: 6px;
  line-height: 125%;
  font-weight: 900;
}
.content {
  display: inline-block;
}
.menus {
  float: right;
}
.nav {
  font-size: 32px;
  font-weight: 300;
}
@media all and (max-width: 899px) {
  .header-main {
    padding: 12px 16px;
  }
}

@media all and (min-width: 900px) {
  .header-main {
    left: calc(50% - (900px/2));
    padding: 12px 0;
  }
}
</style>