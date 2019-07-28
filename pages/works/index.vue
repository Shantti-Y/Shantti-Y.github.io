<template>
  <div id="works">
    <headline text="Works" />
    <div class="work-set">
      <toned-image
        v-for="(work, idx) in works"
        :key="idx"
        :imgSrc="work.img"
        :name="work.name"
        :role="work.role"
      />
    </div>
    <div class="link-area">
      <text-link text="Let me contact you" path="/contact" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import Headline from '@/components/molecules/Headline.vue';
import TonedImage from '@/components/molecules/TonedImage.vue';
import TextLink from '@/components/atoms/TextLink.vue';

@Component({
  head(){
    return {
      title: 'Works'
    }
  },
  components: {
    Headline,
    TonedImage, 
    TextLink
  }
})
export default class WorksPage extends Vue {
  @Action('background/changeImage') readonly changeImage;

  get works() {
    return [
      { name: 'Nikocale', role: 'Design / Web Development', img: require('@/assets/images/works/nikocale/desktop2.jpg'), path: '/nikocale' },
      { name: 'Setlify', role: 'Design / Web Development', img: require('@/assets/images/works/setlify/desktop1.jpg'), path: '/setlify' },
      { name: 'Yakukyari', role: 'Web Development', img: require('@/assets/images/works/yakukyari/desktop1.jpg'), path: '/yakukyari' },
      { name: 'DealXpert', role: 'Web Development / DB Design', img: require('@/assets/images/works/dealxpert/desktop1.jpg'), path: '/dealxpert' }
    ];
  }

  get backgroundImage(): string {
    return require('@/assets/images/background/works.jpg');
  }

  created(){
    this.changeImage(this.backgroundImage);
  }
}
</script>
<style lang="scss">
#works {
  .toned-image {
    margin-bottom: 64px;
    align-items: start;
  }
  .link-area {
    margin-top: 160px;
  }
}

@media all and (max-width: 959px) {
  #works {
    .toned-image {
      width: 100%;
    }
  }
}

@media all and (min-width: 960px) {
  #works {
    .toned-image {
      width: calc(50% - 70px);
      margin-left: 35px;
      margin-right: 35px;
    }
  }
}
</style>