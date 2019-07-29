<template>
  <div class="mobile-nav-menu" :class="classNames">
    <div @click="toggleOpened">
      <logo className="logo" />
    </div>
    <div class="nav-contents" v-show="opened">
      <div class="nav-buttons" @click="toggleOpened">
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
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop, Emit } from 'vue-property-decorator';

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
  @Prop({ type: Array, required: true }) readonly navs;
  @Prop({ type: Array, required: true }) readonly socials;
  @Prop({ type: Object, required: true }) readonly copyright;

  opened: boolean = false;

  @Emit()
  toggleOpened(){
    console.log(this.opened)
    this.opened = !this.opened;
  }
  
}
</script>
<style lang="scss" scoped>
  .mobile-nav-menu {
    .logo {
      width: 55px;
      height: 55px;
      position: fixed;
      top: 24px;
      left: 24px;
      z-index: 100;
    }

    .nav-contents {
      width: 100%;
      height: 100vh;
      z-index: 90;
      position: fixed;
      background: rgba(2, 0, 40, 1);
      padding-top: 72px;
      left: 0;
      right: 0;

      .nav-buttons {
        margin-top: 36px;

        .nav-button {
          margin: 0 auto;
        }
      }

      .social-icons {
        margin-top: 60px;
        text-align: center;

        .social-icon {
          display: binline-lock;
          margin: 0 16px;
        }
      }

      .copyright {
        position: fixed;
        text-align: center;
        padding: 0 20px;
        bottom: 36px;
        right: 0;
        left: 0;
      }
    }
  }

  @media all and (max-width: 959px) {
    .mobile-nav-menu {
      display: block;
    }
  }

  @media all and (min-width: 960px) {
    .mobile-nav-menu {
      display: none;
    }
  }
</style>