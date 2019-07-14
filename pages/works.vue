<template>
  <div id="works">
    <page-container headline="Works">
      <dialog-background>
        <component :is="currentComponent" />
      </dialog-background>
      <div class="image-cards">
        <work-image-card
          v-for="(work, idx) in works"
          :key="idx"
          :name="work.name"
          :image="work.image"
          :typicalTechs="work.typicalTechs.map(tech => tech.name)"
          @click="() => changeCurrentComponentName(work.componentName)"
        />
      </div>
      <navigation-link className="navigation-link" to="/contact" text="Contact Me" />
    </page-container>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { devIconList } from '@/utils/devicons';

import DialogBackground from '@/components/organisms/DialogBackground.vue';
import NikocaleDialog from '@/components/Works/Nikocale.vue';
import SetlifyDialog from '@/components/Works/Setlify.vue';
import YakukyariDialog from '@/components/Works/Yakukyari.vue';
import DealXpertDialog from '@/components/Works/DealXpert.vue';
import PortfolioDialog from '@/components/Works/Portfolio.vue';
import PageContainer from '@/components/organisms/PageContainer.vue';
import WorkImageCard from '@/components/molecules/WorkImageCard.vue';
import NavigationLink from '@/components/molecules/NavigationLink.vue';

@Component({
  head(){
    return {
      title: 'Works'
    }
  },
  components: {
    DialogBackground,
    NikocaleDialog,
    SetlifyDialog,
    YakukyariDialog,
    DealXpertDialog,
    PortfolioDialog,
    PageContainer,
    WorkImageCard,
    NavigationLink
  }
})
export default class WorksPage extends Vue {
  @Getter('workDialog/currentComponent') currentComponent;
  @Action('workDialog/changeCurrentComponentName') changeCurrentComponentName;

  works = [
    {
      name: 'Nikocale', componentName: 'NikocaleDialog',
      typicalTechs: [
        devIconList.react,
        devIconList.kotlin,
        devIconList.springboot,
        devIconList.firebase,
        devIconList.websocket
      ],
      image: { src: require('@/assets/images/works/nikocale/desktop1.png'), alt: 'nikocale-pic' }
    },
    {
      name: 'Setlify', componentName: 'SetlifyDialog',
      typicalTechs: [
        devIconList.react,
        devIconList.webpack,
        devIconList.spotify
      ],
      image: { src: require('@/assets/images/works/setlify/desktop1.png'), alt: 'setlify-pic' }
    },
    {
      name: 'Yakukyari', componentName: 'YakukyariDialog',
      typicalTechs: [
        devIconList.ruby,
        devIconList.rails,
        devIconList.vuejs,
        devIconList.postgresql
      ],
      image: { src: require('@/assets/images/works/yakukyari/desktop1.png'), alt: 'yakukyari-pic' }
    },
    {
      name: 'DealXpert', componentName: 'DealXpertDialog',
      typicalTechs: [
        devIconList.ruby,
        devIconList.rails,
        devIconList.react,
        devIconList.webpack
      ],
      image: { src: require('@/assets/images/works/dealxpert/desktop1.png'), alt: 'dealxpert-pic' }
    },
    {
      name: 'Portfolio', componentName: 'PortfolioDialog',
      typicalTechs: [
        devIconList.vuejs,
        devIconList.nuxt,
        devIconList.typescript
      ],
      image: { src: require('@/assets/images/works/nikocale/desktop1.png'), alt: 'nikocale-pic' }
    }
  ]
}
</script>
<style scoped lang="scss">
#works {
  .navigation-link {
    margin-top: 32px;
    float: right;
  }
}
</style>