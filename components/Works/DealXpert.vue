<template>
  <work-dialog
    name="DealXpert"
    role="Front, Back-end Development, Database Design"
    :screenShots="screenShots"
  >
    <template v-slot:1>
      <dialog-content-container>
        <typography variant="h4" text="Overview" />
        <typography variant="p" text="DealXpert is a sales process management system which targets to B2B companies. Not only it records a business person's client information and their relationships, but also shows effective solutions to navigate complex deals to win." />
        
      </dialog-content-container>
    </template>
    <template v-slot:2>
      <dialog-content-container>
        <typography variant="h4" text="Background" />
        <typography variant="p" text="I have joined for the half of a year since the begining of this project. What I did were application development in both sides(front-end, back-end) and first version of database design. So that this application has been released in some closed users.
        " />
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
    { src: require('@/assets/images/works/dealxpert/desktop1.jpg'), alt: 'dealxpert-pic-1' },
    { src: require('@/assets/images/works/dealxpert/desktop2.jpg'), alt: 'dealxpert-pic-2' },
    { src: require('@/assets/images/works/dealxpert/desktop3.jpg'), alt: 'dealxpert-pic-3' },
    { src: require('@/assets/images/works/dealxpert/desktop4.jpg'), alt: 'dealxpert-pic-4' }
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