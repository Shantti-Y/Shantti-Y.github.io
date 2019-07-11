<template>
  <container
    color="#ff8a65"
    :priority="3"
    headline="Setlify"
    githubRepository="https://github.com/Shantti-Y/SetList"
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
export default class FirstWorkContent extends Vue {
  screenShotsForDesktop = [
    require('@/assets/images/works/setlify/desktop1.png'),
    require('@/assets/images/works/setlify/desktop2.png'),
    require('@/assets/images/works/setlify/desktop3.png'),
    require('@/assets/images/works/setlify/desktop4.png')
  ]
  screenShotsForMobile = [
    require('@/assets/images/works/setlify/mobile1.png'),
    require('@/assets/images/works/setlify/mobile2.png'),
    require('@/assets/images/works/setlify/mobile3.png'),
    require('@/assets/images/works/setlify/mobile4.png')
  ];

  devicons = [
    devIconList.html5,
    devIconList.css3,
    devIconList.javascript,
    devIconList.nodejs,
    devIconList.express,
    devIconList.react,
    devIconList.webpack,
  ];

  description = "Setlify is a instant Spotify playlist creator. What you needs are only three things. Your Spotify account, playlist's duration, and your favorite words.";
}
</script>
