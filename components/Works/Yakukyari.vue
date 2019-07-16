<template>
  <work-dialog
    name="Yakukyari"
    role="Front, Back-end Development, Operator"
    :screenShots="screenShots"
    websiteSrc="https://pcareer.m3.com"
  >
    <template v-slot:1>
      <dialog-content-container>
        <typography variant="h4" text="Overview" />
        <typography variant="p" text="Yakukyari is one of the largest job finding website for pharmacists in Japan. The biggest feature is it publishes job postings of other recruitment agencies so that it functions as pharmacist's portal website." />
      </dialog-content-container>
    </template>
    <template v-slot:2>
      <dialog-content-container>
        <typography variant="h4" text="Overview" />
        <typography variant="p" text="I have joined M3 Career Co. as a full-stack web developer for two years to renew front design and create new features. During this project, I replaced legacy techs with vue.js to implement new inquiry form which is the core for M3 Career's business and add Web Worker for Page Speed Insight score improvement." />
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
    { src: require('@/assets/images/works/yakukyari/desktop1.jpg'), alt: 'yakukyari-pic-1' },
    { src: require('@/assets/images/works/yakukyari/desktop2.jpg'), alt: 'yakukyari-pic-2' },
    { src: require('@/assets/images/works/yakukyari/desktop3.jpg'), alt: 'yakukyari-pic-3' },
    { src: require('@/assets/images/works/yakukyari/mobile1.jpg'), alt: 'yakukyari-pic-4' },
    { src: require('@/assets/images/works/yakukyari/mobile2.jpg'), alt: 'yakukyari-pic-5' },
    { src: require('@/assets/images/works/yakukyari/mobile3.jpg'), alt: 'yakukyari-pic-6' },
  ];

   devIcons = [
    devIconList.html5,
    devIconList.css3,
    devIconList.sass,
    devIconList.javascript,
    devIconList.babel,
    devIconList.ruby,
    devIconList.rails,
    devIconList.vuejs,
    devIconList.webpack,
    devIconList.postgresql
  ];
}
</script>
<style scoped lang="scss">
</style>