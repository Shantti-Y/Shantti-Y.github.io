<template>
  <div class="desktop-nav-menu" :class="classNames">
    <logo className="logo" />
    <div class="nav-buttons">
      <nav-button
        v-for="(nav, idx) in navs"
        :key="idx"
        :to="nav.to"
        :text="nav.text"
      />
    </div>
    <div class="social-icons">
      <social-button
        v-for="(social, idx) in socials"
        :key="idx"
        className="social-icon"
        :name="social.name"
        :url="social.url"
      />
    </div>
    <copyright
      className="copyright"
      :from="copyright.from"
      :to="copyright.to"
    />
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import Logo from '@/components/atoms/Logo.vue';
import NavButton from '@/components/atoms/NavButton.vue';
import SocialButton from '@/components/molecules/SocialButton.vue';
import Copyright from '@/components/molecules/Copyright.vue';

@Component({
  components: {
    // TODO: create a molecule that consists of IonIcon and Typography
    Logo,
    NavButton,
    SocialButton,
    Copyright
  }
})
export default class DesktopNavMenu extends Mixins(ClassName) {

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
  .desktop-nav-menu {
    position: fixed;
    width: 150px;
    min-height: 100vh;
    background: rgba(2, 0, 40, 1);
    padding: 24px 0;

    .logo {
      width: 65px;
      height: 65px;
      margin: 0 auto;
    }

    .nav-buttons {
      margin-top: 36px;
    }

    .social-icons {
      margin-top: 20px;
      text-align: center;

      .social-icon {
        display: block;
        margin-bottom: 16px;
      }
    }

    .copyright {
      position: fixed;
      bottom: 24px;
      padding: 0 20px;
    }
  }

  @media all and (max-width: 959px) {
    .desktop-nav-menu {
      display: none;
    }
  }

  @media all and (min-width: 960px) {
    .desktop-nav-menu {
      display: block;
    }
  }
</style>