<template>
  <container
    color="#c0ca33"
    :priority="5"
    headline="Other Works"
  >
    <work-content
      :screenShotsForDesktop="screenShotsForDesktop"
      :screenShotsForMobile="screenShotsForMobile"
      :devicons="devicons"
      :description="description"
    />
  </container>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';

import { devIconList } from '@/utils/devicons';

import Container from '@/components/Container.vue';
import WorkContent from '@/components/WorkContent.vue';

@Component({
  components: {
    Container,
    WorkContent
  }
})
export default class ThirdWorkContent extends Vue {
  screenShotsForDesktop = [
    require('@/assets/images/works/others/desktop1.png'),
    require('@/assets/images/works/others/desktop2.png'),
    require('@/assets/images/works/others/desktop3.png'),
    require('@/assets/images/works/others/desktop4.png')
  ]
  screenShotsForMobile = [
    require('@/assets/images/works/others/mobile1.png'),
    require('@/assets/images/works/others/mobile2.png'),
    require('@/assets/images/works/others/mobile3.png'),
    require('@/assets/images/works/others/mobile4.png')
  ];

  devicons = [
    devIconList.html5,
    devIconList.css3,
    devIconList.sass,
    devIconList.javascript,
    devIconList.babel,
    devIconList.ruby,
    devIconList.kotlin,
    devIconList.rails,
    devIconList.springboot,
    devIconList.vuejs,
    devIconList.nuxt,
    devIconList.webpack,
    devIconList.postgresql
  ];

  description = "I have worked as a full-stack software developer for 2 years. During in Japan, I have participated many projects, including Page Speed Insight improvement for SEO, building a new application at the beginning of the project, and anything else... For more details, please ask me via email.";
}
</script>
<style>
  .description {
    font-size: 14px;
    line-height: 135%;
  }
</style>