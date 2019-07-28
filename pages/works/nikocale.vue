<template>
  <div id="works">
    <headline text="Nikocale" />
    <paragraph className="role" text="Web Development / Design, Database Architecture (Personal)" />
    <div class="external-links">
      <external-link name="Visit Github Repo" iconName="logo-github" url="https://github.com/Shantti-Y/Chalendiary" color="rgba(175, 83, 255, 1)" />
      <external-link name="Visit Website" iconName="ios-link" url="https://nikocale.com" color="rgba(61, 113, 255, 1)" />
    </div>
    <carousel :screenShots="screenShots" />

    <sub-headline text="Overview" />
    <paragraph text="Nikocale stands for 'Niko-niko Calendar' which visualizes the mood and morale of members in the team/organization (Wikipedia). This software can make communication among the group smooth." />
    <sub-headline text="Background" />
    <paragraph text="When I had been working at M3 Career Co., there was a old version of Nikocale which is operated in Google Spreadsheet. However, I've got motivated to create it as a web application because of many reasons (making it more convinient, implementing new technologies which I don't know). It is created by only me with Websocket, Firebase, and React-redux." />
    <sub-headline text="Tech Stacks" />
    <div class="tech-stack-list">
      <paragraph className="tech-stacklist-item" text="HTML5" />
      <paragraph className="tech-stacklist-item" text="CSS3" />
      <paragraph className="tech-stacklist-item" text="Sass/Scss" />
      <paragraph className="tech-stacklist-item" text="JavaScript" />
      <paragraph className="tech-stacklist-item" text="Babel" />
      <paragraph className="tech-stacklist-item" text="Kotlin" />
      <paragraph className="tech-stacklist-item" text="Spring Boot" />
      <paragraph className="tech-stacklist-item" text="React" />
      <paragraph className="tech-stacklist-item" text="Webpack" />
      <paragraph className="tech-stacklist-item" text="Postgre Sql" />
      <paragraph className="tech-stacklist-item" text="Firebase" />
      <paragraph className="tech-stacklist-item" text="Web Socket" />
    </div>
    <div class="link-area">
      <text-link text="Back to see others" path="/works" />
      <text-link text="Let me contact you" path="/contact" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import Carousel from '@/components/organisms/Carousel.vue';
import Headline from '@/components/molecules/Headline.vue';
import SubHeadline from '@/components/molecules/SubHeadline.vue';
import Paragraph from '@/components/molecules/Paragraph.vue';
import ExternalLink from '@/components/molecules/ExternalLink.vue';
import TextLink from '@/components/atoms/TextLink.vue';

@Component({
  head(){
    return {
      title: 'Nikocale'
    }
  },
  components: {
    Carousel,
    Headline,
    SubHeadline,
    Paragraph,
    ExternalLink,
    TextLink
  }
})
export default class WorksPage extends Vue {
  @Action('background/changeImage') readonly changeImage;

  get screenShots(): object[] {
    return [
      { src: require('@/assets/images/works/nikocale/desktop1.jpg'), alt: 'nikocale-1' },
      { src: require('@/assets/images/works/nikocale/desktop2.jpg'), alt: 'nikocale-2' },
      { src: require('@/assets/images/works/nikocale/desktop3.jpg'), alt: 'nikocale-3' },
      { src: require('@/assets/images/works/nikocale/desktop4.jpg'), alt: 'nikocale-4' },
      { src: require('@/assets/images/works/nikocale/mobile1.jpg'), alt: 'nikocale-5' },
      { src: require('@/assets/images/works/nikocale/mobile2.jpg'), alt: 'nikocale-6' },
      { src: require('@/assets/images/works/nikocale/mobile3.jpg'), alt: 'nikocale-7' },
      { src: require('@/assets/images/works/nikocale/mobile4.jpg'), alt: 'nikocale-8' }
    ]
  }

  get backgroundImage(): string {
    return require('@/assets/images/works/nikocale/desktop2.jpg');
  }

  created(){
    this.changeImage(this.backgroundImage);
  }
}
</script>
<style lang="scss">
#works {
  .headline {
    margin-bottom: 14px;
  }
  .role {
    margin-bottom: 45px;
  }
  .external-links {
    margin-bottom: 60px;
  }
  .sub-headline {
    margin-top: 55px;
    margin-bottom: 15px;
  }
}

@media all and (max-width: 959px) {
  #works {
  }
}

@media all and (min-width: 960px) {
  #works {
  }
}
</style>