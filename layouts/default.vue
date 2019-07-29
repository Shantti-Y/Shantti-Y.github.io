<template>
  <div id="default" :style="backgroundStyle">
    <desktop-nav-menu
      :navs="navs"
      :socials="socials"
      :copyright="copyright"
    />
    <mobile-nav-menu
      :navs="navs"
      :socials="socials"
      :copyright="copyright"
    />
    <div id="page-contents">
      <nuxt />
    </div>
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
      backgroundImage: `linear-gradient(rgba(2, 0, 40, 0.87), rgba(2, 0, 40, 0.87)), url(${this.currentImage})`
    };
  }

  get navs(): { to: string, text: string }[] {
    return [
      { to: '/', text: 'HOME' },
      { to: '/about', text: 'ABOUT' },
      { to: '/skills', text: 'SKILLS' },
      { to: '/works', text: 'WORKS' },
      { to: '/contact', text: 'CONTACT' }
    ];
  }

  get socials(): { name: string, url: string }[] {
    return [
      { name: 'twitter', url: 'https://twitter.com/Shantti_Y' },
      { name: 'facebook', url: 'https://www.facebook.com/hammpilot' },
      { name: 'octocat', url: 'https://github.com/Shantti-Y' },
      { name: 'linkedin', url: 'https://www.linkedin.com/in/takahiro-yoshioka-a4207a141/' }
    ];
  }

  get copyright(): { from: number, to: number } {
    return {
      from: 2019,
      to: 2019
    }
  }
}

</script>
<style lang="scss" scoped>
#default {
  min-height: 100vh;
  width: 100vw;
  background-attachment: fixed;
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
      padding: 130px 0;
    }
  }
}

@media all and (min-width: 960px) {
  #default {
    #page-contents {
      width: calc(100% - (208px + 58px));
      margin: 0 58px 0 208px;
      padding: 90px 0;
    }
  }
}
</style>