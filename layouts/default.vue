<template>
  <div id="default" :style="backgroundStyle">
    <desktop-nav-menu />
    <nuxt id="page-contents" ref="page" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import DesktopNavMenu from '@/components/organisms/DesktopNavMenu.vue';
import MobileNavMenu from '@/components/organisms/MobileNavMenu.vue';

@Component({
  components: {
    DesktopNavMenu,
    MobileNavMenu
  }
})
export default class DefaultLayout extends Vue {
  @Getter('background/currentImage') readonly currentImage;

  get backgroundStyle(): object {
    return {
      backgroundImage: `linear-gradient(rgba(2, 0, 40, 0.85), rgba(2, 0, 40, 0.85)), url(${this.currentImage})`
    };
  }
}
</script>
<style lang="scss" scoped>
#default {
  min-height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;

  #page-contents {
    box-sizing: border-box;
    height: 100%;
  }
}

@media all and (max-width: 959px) {
  #default {
    #page-contents {
      margin : 0 32px;
    }
  }
}

@media all and (min-width: 960px) {
  #default {
    #page-contents {
      width: calc(100% - (208px * 2));
      margin: 0 208px;
    }
  }
}
</style>