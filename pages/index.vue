<template>
  <div id="index">
    <headline text="WELCOME" />
    <sub-headline text="I'm Takahiro yoshioka" />
    <sub-headline text="A full-stack web developer" />
    <paragraph text="Specializing Ruby on Rails and Kotlin web development. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here." />

    <div class="link-area">
      <text-link text="Who are you?" path="/about" />
      <text-link text="Let me contact you" path="/contact" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import Headline from '@/components/molecules/Headline.vue';
import SubHeadline from '@/components/molecules/SubHeadline.vue';
import Paragraph from '@/components/molecules/Paragraph.vue';
import TextLink from '@/components/atoms/TextLink.vue';

@Component({
  head(){
    return {
      title: 'Welcome'
    }
  },
  components: {
    Headline,
    SubHeadline,
    Paragraph,
    TextLink
  },
  transition: {
    name: 'default'
  }
})
export default class IndexPage extends Vue {
  @Action('background/changeImage') readonly changeImage;

  get backgroundImage(): string {
    return require('@/assets/images/background/index.jpg');
  }

  created(){
    this.changeImage(this.backgroundImage);
  }
}
</script>
<style lang="scss">
#index {
  .paragraph {
    margin-top: 45px;
  }
  .link-area {
    margin-top: 120px;
  }
}
</style>