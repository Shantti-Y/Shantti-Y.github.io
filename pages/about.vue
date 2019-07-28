<template>
  <div id="about">
    <headline text="About me" />
    <paragraph text="I'm Takahiro Yoshioka. You can call me like 'Taka', 'Shantti-Y'." />
    <paragraph text="I've been working as a Full-stack Web Developer in Japan for more than one year so that familiar with building a bridge between client-side and server-side." />
    <paragraph text="My mission is to create applications with dynamic, intuitive, and great user-interfaces in a component based architecture using virtual DOM frameworks such as Vue.js or React... etc." />
    <sub-headline text="Here's my career" />

    <timeline />

    <div class="link-area">
      <text-link text="So, what can you do?" path="/skills" />
      <text-link text="Let me contact you" path="/contact" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import Timeline from '@/components/organisms/Timeline.vue';
import Headline from '@/components/molecules/Headline.vue';
import SubHeadline from '@/components/molecules/SubHeadline.vue';
import Paragraph from '@/components/molecules/Paragraph.vue';
import TextLink from '@/components/atoms/TextLink.vue';

@Component({
  head(){
    return {
      title: 'About'
    }
  },
  components: {
    Timeline,
    Headline,
    SubHeadline,
    Paragraph,
    TextLink
  }
})
export default class AboutPage extends Vue {
  @Action('background/changeImage') readonly changeImage;

  get backgroundImage(): string {
    return require('@/assets/images/background/about.jpg');
  }

  created(){
    this.changeImage(this.backgroundImage);
  }
}
</script>
<style lang="scss">
#about {
  .sub-headline {
    margin-top: 80px;
  }
  .timeline {
    margin-top: 45px;
  }
  .link-area {
    margin-top: 160px;
  }
}
</style>