<template>

  <div class="mobile-nav-menu" :class="classNames">
    <div class="navbar">
      <div class="menu-opener" @click="toggleOpened">
        <ion-icon className="menu-icon" name="md-reorder" :size="45" />
      </div>
      <div class="logo-wrapper">
        <logo className="logo" />
      </div>
    </div>
    <transition name="expand">
      <div class="nav-background" :class="{ active: opened }" v-show="opened">
        <div class="nav-contents">
          <div class="nav-buttons">
            <div @click="toggleOpened">
              <nav-button
                v-for="(nav, idx) in navs"
                :key="idx"
                className="nav-button"
                :to="nav.to"
                :text="nav.text"
              />
            </div>
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
    </transition>
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop, Emit } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import Logo from '@/components/atoms/Logo.vue';
import IonIcon from '@/components/atoms/IonIcon.vue';
import NavButton from '@/components/atoms/NavButton.vue';
import SocialButton from '@/components/molecules/SocialButton.vue';
import Copyright from '@/components/molecules/Copyright.vue';

@Component({
  components: {
    // TODO: create a molecule that consists of IonIcon and Typography
    Logo,
    IonIcon,
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
    transition: height 200ms;
    overflow: hidden;
    .menu-icon {
      padding: 5px;
      position: fixed;
      top: 6px;
      left: 6px;
      width: 45px;
      height: 45px;
      text-align: center;
      z-index: 100;
      color: #00ff9f;
    }

    .logo {
      padding: 5px;
      width: 45px;
      height: 45px;
      position: fixed;
      top: 6px;
      right: 6px;
      z-index: 100;
    }

    .nav-background {
      overflow: hidden;
      transition: all .5s;
      width: 0;
      height: 0;
      z-index: 90;
      position: fixed;
      background: rgba(2, 0, 40, 1);
    }
    .active {
      width: 100vw;
      height: 100vh;
    }

    .nav-contents {
      transition: all .9s;
      height: 100vh;
      width: 100vw;
      z-index: 90;
      position: absolute;
      
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
        position: absolute;
        text-align: center;
        padding: 0 20px;
        bottom: 150px;
        right: 0;
        left: 0;
      }
    }
  }
 .expand-enter-active, .expand-leave-active {
    transition: all .5s;
  }
  .expand-enter, .expand-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transition: all .5s;
    height: 0;
    width: 0;
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