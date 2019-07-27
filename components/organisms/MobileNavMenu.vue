<template>
  <div class="mobile-nav-menu" :class="classNames">
    <logo className="logo" />
    <div class="nav-buttons">
      <nav-button
        v-for="(nav, idx) in navs"
        :key="idx"
        className="nav-button"
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
export default class MobileNavMenu extends Mixins(ClassName) {

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
  .mobile-nav-menu {
    width: 100%;
    max-height: 800px;
    background: rgba(2, 0, 40, 1);
    padding: 18px 0 36px 0;

    .logo {
      width: 55px;
      height: 55px;
      margin: 0 18px;
    }

    .nav-buttons {
      margin-top: 36px;

      .nav-button {
        margin: 0 auto;
      }
    }

    .social-icons {
      margin-top: 24px;
      text-align: center;

      .social-icon {
        display: block;
        margin-bottom: 16px;
      }
    }

    .copyright {
      text-align: center;
      margin-top: 36px;
      padding: 0 20px;
    }
  }

  @media all and (max-width: 599px) {
    .mobile-nav-menu {
      display: block;
    }
  }

  @media all and (min-width: 600px) {
    .mobile-nav-menu {
      display: none;
    }
  }
</style>