<template>
  <work-dialog
    name="Portfolio"
    role="Front Development (Private)"
    :screenShots="screenShots"
    websiteSrc="https://friendly-keller-883efa.netlify.com"
    githubRepoSrc="https://github.com/Shantti-Y/Shantti-Y.github.io"
  >
    <template v-slot:1>
      <dialog-content-container>
        <typography variant="h4" text="Overview" />
        <typography variant="p" text="Also, I want you to look at my portfolio site as one of my works. This is used as an experiment for new techs, and new tools." />
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
    { src: require('@/assets/images/works/portfolio/desktop1.jpg'), alt: 'portfolio-pic-1' },
    { src: require('@/assets/images/works/portfolio/desktop2.jpg'), alt: 'portfolio-pic-2' },
    { src: require('@/assets/images/works/portfolio/mobile1.jpg'), alt: 'portfolio-pic-3' },
    { src: require('@/assets/images/works/portfolio/mobile2.jpg'), alt: 'portfolio-pic-4' },
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