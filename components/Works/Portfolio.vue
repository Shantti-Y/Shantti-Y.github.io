<template>
  <work-dialog
    name="Portfolio"
    role="Front Developer"
    :screenShots="screenShots"
    :numberOfContent="2"
  >
    <template v-slot:1>
      <dialog-content-container>
        <typography variant="h4" text="About" />
        <typography variant="p" text="Nikocale stands for 'Niko-niko Calendar' which visualizes the mood and morale of members in the team/organization (Wikipedia). This software can make communication among the group smooth." />
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
    { src: require('@/assets/images/works/nikocale/desktop1.png'), alt: 'nikocale-pic-1' },
    { src: require('@/assets/images/works/nikocale/desktop2.png'), alt: 'nikocale-pic-2' },
    { src: require('@/assets/images/works/nikocale/desktop3.png'), alt: 'nikocale-pic-3' },
    { src: require('@/assets/images/works/nikocale/desktop4.png'), alt: 'nikocale-pic-4' },
    { src: require('@/assets/images/works/nikocale/mobile1.png'), alt: 'nikocale-pic-5' },
    { src: require('@/assets/images/works/nikocale/mobile2.png'), alt: 'nikocale-pic-6' },
    { src: require('@/assets/images/works/nikocale/mobile3.png'), alt: 'nikocale-pic-7' },
    { src: require('@/assets/images/works/nikocale/mobile4.png'), alt: 'nikocale-pic-8' },
  ];

   devIcons = [
    devIconList.html5,
    devIconList.css3,
    devIconList.sass,
    devIconList.javascript,
    devIconList.babel,
    devIconList.vuejs,
    devIconList.nuxt,
    devIconList.typescript
  ];
}
</script>
<style scoped lang="scss">
</style>