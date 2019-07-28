<template>
  <div id="skills">
    <headline text="SKILLS" />
    <div class="skill-sets">
      <skill-set
        v-for="(skillSet, idx) in skillSets"
        :key="idx"
        :category="skillSet.category"
        :skills="skillSet.skills"
      />
    </div>
    <div class="link-area">
      <text-link text="Show what you've done" path="/works" />
      <text-link text="Let me contact you" path="/contact" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import SkillSet from '@/components/organisms/SkillSet.vue';
import Headline from '@/components/molecules/Headline.vue';
import SubHeadline from '@/components/molecules/SubHeadline.vue';
import Paragraph from '@/components/molecules/Paragraph.vue';
import TextLink from '@/components/atoms/TextLink.vue';

@Component({
  head(){
    return {
      title: 'Skills'
    }
  },
  components: {
    SkillSet,
    Headline,
    SubHeadline,
    Paragraph,
    TextLink
  }
})
export default class SkillsPage extends Vue {
  @Action('background/changeImage') readonly changeImage;

  get skillSets() {
    return [
      {
        category: {
          name: 'JavaScript',
          icon: 'logo-javascript',
          color: 'rgba(67, 239, 107, 1)'
        },
        skills: [
          { name: 'JavaScript', percentage: 80 },
          { name: 'Vue.js', percentage: 70 },
          { name: 'React', percentage: 70 },
          { name: 'Webpack', percentage: 60 },
          { name: 'TypeScript', percentage: 60 }
        ]
      },
      {
        category: {
          name: 'BackEnd',
          icon: 'md-cube',
          color: 'rgba(201, 53, 53, 1)'
        },
        skills: [
          { name: 'Ruby', percentage: 80 },
          { name: 'Kotlin', percentage: 60 },
          { name: 'Rails', percentage: 80 },
          { name: 'SpringBoot', percentage: 60 },
          { name: 'Postgresql', percentage: 70 }
        ]
      },
      {
        category: {
          name: 'Markup',
          icon: 'md-tv',
          color: 'rgba(241, 133, 51, 1)'
        },
        skills: [
          { name: 'HTML5', percentage: 80 },
          { name: 'CSS3', percentage: 80 },
          { name: 'Sass/Scss', percentage: 70 }
        ]
      },
      {
        category: {
          name: 'Others',
          icon: 'md-list',
          color: 'rgba(71, 66, 228, 1)'
        },
        skills: [
          { name: 'Git', percentage: 80 },
          { name: 'Github', percentage: 80 },
          { name: 'Gitlab', percentage: 70 },
          { name: 'Docker', percentage: 70 }
        ]
      }
    ]
  }

  get backgroundImage(): string {
    return require('@/assets/images/background/skills.jpg');
  }

  created(){
    this.changeImage(this.backgroundImage);
  }
}
</script>
<style scoped lang="scss">
#skills {
  .skill-set {
    margin-bottom: 64px;
    align-items: start;
  }
  .link-area {
    margin-top: 120px;
  }
}

@media all and (max-width: 959px) {
  #skills {
    .skill-set {
      width: 100%;
    }
  }
}

@media all and (min-width: 960px) {
  #skills {
    .skill-set {
      width: calc(50% - 70px);
      margin-left: 35px;
      margin-right: 35px;
    }
  }
}
</style>