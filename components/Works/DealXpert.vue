<template>
  <work-dialog
    name="DealXpert"
    role="Front, Back-end Developer"
    :screenShots="screenShots"
    :numberOfContent="2"
  >
    <template v-slot:1>
      <dialog-content-container>
        <typography variant="h4" text="About" />
        <typography variant="p" text="Setlify is a instant Spotify playlist creator. What you needs are only three things. Your Spotify account, playlist's duration, and your favorite words." />
      </dialog-content-container>
    </template>
    <template v-slot:2>
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
    { src: require('@/assets/images/works/dealxpert/desktop1.png'), alt: 'dealxpert-pic-1' },
    { src: require('@/assets/images/works/dealxpert/desktop2.png'), alt: 'dealxpert-pic-2' },
    { src: require('@/assets/images/works/dealxpert/mobile1.png'), alt: 'dealxpert-pic-3' },
    { src: require('@/assets/images/works/dealxpert/mobile2.png'), alt: 'dealxpert-pic-4' },
  ];

   devIcons = [
    devIconList.html5,
    devIconList.css3,
    devIconList.sass,
    devIconList.javascript,
    devIconList.babel,
    devIconList.ruby,
    devIconList.rails,
    devIconList.react,
    devIconList.webpack,
    devIconList.postgresql
  ];
}
</script>
<style scoped lang="scss">
</style>