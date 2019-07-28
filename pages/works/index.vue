<template>
  <div id="works">
    <headline text="WORKS" />
    <div class="work-set">
      <nuxt-link
        v-for="(work, idx) in workList"
        :key="idx"
        :to="work.path"
      >
        <toned-image
          :imgSrc="work.img"
          :name="work.name"
          :role="work.role"
        />
      </nuxt-link>
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

import works from '@/utils/works';

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

  get workList(): {
    name: string,
    role: string,
    img: string,
    path: string
  }[] {
    return Object.keys(works).map(key => {
      const work = works[key];
      return {
        name: work.headline,
        role: work.roleShort,
        img: work.thumbnail,
        path: `/works/${key}`
      }
    });
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
    margin-top: 120px;
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