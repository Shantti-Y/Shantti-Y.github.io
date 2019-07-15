<template>
  <work-dialog
    name="Nicocale"
    role="Front, Back-end Development, Database Design (Private)"
    :screenShots="screenShots"
    websiteSrc=""
    githubRepoSrc="https://github.com/Shantti-Y/Chalendiary"
  >
    <template v-slot:1>
      <dialog-content-container>
        <typography variant="h4" text="Overview" />
        <typography variant="p" text="Nikocale stands for 'Niko-niko Calendar' which visualizes the mood and morale of members in the team/organization (Wikipedia). This software can make communication among the group smooth." />
      </dialog-content-container>
    </template>
    <template v-slot:2>
      <dialog-content-container>
        <typography variant="h4" text="Background" />
        <typography variant="p" text="When I had been working at M3 Career Co., there was a old version of Nikocale which is operated in Google Spreadsheet. However, I've got motivated to create it as a web application because of many reasons (making it more convinient, implementing new technologies which I don't know). It is created by only me with Websocket, Firebase, and React-redux." />

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
    { src: require('@/assets/images/works/nikocale/desktop1.jpg'), alt: 'nikocale-pic-1' },
    { src: require('@/assets/images/works/nikocale/desktop2.jpg'), alt: 'nikocale-pic-2' },
    { src: require('@/assets/images/works/nikocale/desktop3.jpg'), alt: 'nikocale-pic-3' },
    { src: require('@/assets/images/works/nikocale/desktop4.jpg'), alt: 'nikocale-pic-4' },
    { src: require('@/assets/images/works/nikocale/mobile1.jpg'), alt: 'nikocale-pic-5' },
    { src: require('@/assets/images/works/nikocale/mobile2.jpg'), alt: 'nikocale-pic-6' },
    { src: require('@/assets/images/works/nikocale/mobile3.jpg'), alt: 'nikocale-pic-7' },
    { src: require('@/assets/images/works/nikocale/mobile4.jpg'), alt: 'nikocale-pic-8' },
  ];

   devIcons = [
    devIconList.html5,
    devIconList.css3,
    devIconList.sass,
    devIconList.javascript,
    devIconList.babel,
    devIconList.kotlin,
    devIconList.springboot,
    devIconList.react,
    devIconList.webpack,
    devIconList.postgresql,
    devIconList.firebase,
    devIconList.websocket
  ];
}
</script>
<style scoped lang="scss">
</style>