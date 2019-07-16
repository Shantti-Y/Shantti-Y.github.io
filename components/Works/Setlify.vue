<template>
  <work-dialog
    name="Setlify"
    role="Front, Back-end Development (Private)"
    :screenShots="screenShots"
    websiteSrc="https://setlify-236901.appspot.com"
    githubRepoSrc="https://github.com/Shantti-Y/SetList"
  >
    <template v-slot:1>
      <dialog-content-container>
        <typography variant="h4" text="Overview" />
        <typography variant="p" text="Setlify is a instant Spotify playlist creator. What you needs are only three things. Your Spotify account, playlist's duration, and your favorite words." />
      </dialog-content-container>
    </template>
    <template v-slot:2>
      <dialog-content-container>
        <typography variant="h4" text="Background" />
        <typography variant="p" text="This is a personal work. I have done all the things that application needs to learn how web applications are developed and are deployed in public. In this application, I used a modern JavaScript syntax, frameworks, and GCP for deployment." />
      </dialog-content-container>
    </template>
    <template v-slot:3>
      <dialog-content-container>
        <typography variant="h4" text="Tech Stacks" />
        <dev-tool v-for="(icon, idx) in devIcons" :key="idx" :icon="icon" />
      </dialog-content-container>
    </template>
  </work-dialog>
</template>

<script lang="ts">
import { Component, Prop, Mixins, Watch } from 'vue-property-decorator';
import { setTimeout } from 'timers';

import WorkDialog from '@/components/organisms/WorkDialog.vue';
import DevTool from '@/components/molecules/DevTool.vue';
import ClassName from '@/components/atoms/ClassName';
import DialogContentContainer from '@/components/atoms/DialogContentContainer.vue';
import Typography from '@/components/atoms/Typography.vue';

import { devIconList } from '@/utils/devicons';

@Component({
  components: {
    WorkDialog,
    DevTool,
    DialogContentContainer,
    Typography
  }
})
export default class Dialog extends Mixins(ClassName) {
  screenShots = [
    { src: require('@/assets/images/works/setlify/desktop1.jpg'), alt: 'setlify-pic-1' },
    { src: require('@/assets/images/works/setlify/desktop2.jpg'), alt: 'setlify-pic-2' },
    { src: require('@/assets/images/works/setlify/desktop3.jpg'), alt: 'setlify-pic-3' },
    { src: require('@/assets/images/works/setlify/mobile1.jpg'), alt: 'setlify-pic-4' },
    { src: require('@/assets/images/works/setlify/mobile2.jpg'), alt: 'setlify-pic-5' },
    { src: require('@/assets/images/works/setlify/mobile3.jpg'), alt: 'setlify-pic-6' },
  ];

   devIcons = [
    devIconList.html5,
    devIconList.css3,
    devIconList.javascript,
    devIconList.nodejs,
    devIconList.express,
    devIconList.react,
    devIconList.webpack,
    devIconList.spotify
  ];
}
</script>
<style scoped lang="scss">
</style>