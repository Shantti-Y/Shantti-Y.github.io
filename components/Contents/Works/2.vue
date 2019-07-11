<template>
  <container
    color="#64b5f6"
    :priority="4"
    headline="Nikocale"
    githubRepository="https://github.com/Shantti-Y/Chalendiary"
    livedemo="https://setlify-236901.appspot.com"
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
import { Component, Vue } from 'vue-property-decorator';

import { devIconList } from '@/utils/devicons';

import Container from '@/components/Container.vue';
import WorkContent from '@/components/WorkContent.vue';

@Component({
  components: {
    Container,
    WorkContent
  }
})
export default class SecondWorkContent extends Vue {
  screenShotsForDesktop = [
    require('@/assets/images/works/nikocale/desktop1.png'),
    require('@/assets/images/works/nikocale/desktop2.png'),
    require('@/assets/images/works/nikocale/desktop3.png'),
    require('@/assets/images/works/nikocale/desktop4.png')
  ]
  screenShotsForMobile = [
    require('@/assets/images/works/nikocale/mobile1.png'),
    require('@/assets/images/works/nikocale/mobile2.png'),
    require('@/assets/images/works/nikocale/mobile3.png'),
    require('@/assets/images/works/nikocale/mobile4.png')
  ];

  devicons = [
    devIconList.html5,
    devIconList.css3,
    devIconList.javascript,
    devIconList.kotlin,
    devIconList.springboot,
    devIconList.react,
    devIconList.webpack,
    devIconList.firebase,
    devIconList.postgresql
  ];

  description = "Nikocale stands for 'Niko-niko Calendar' which visualizes the mood and morale of members in the team/organization (Wikipedia). This software can make communication among the group smooth.";
}
</script>
