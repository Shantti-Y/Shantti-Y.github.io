import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import SkillSet from '@/components/organisms/SkillSet.vue';

storiesOf('organisms/SkillSet', module)
  .add('green', () => ({
    components: { SkillSet },
    data() {
      return {
        categoryName: 'JavaScript',
        categoryIcon: 'logo-javascript',
        skills: [
          { name: 'JavaScript', percentage: 80 },
          { name: 'Vue.js', percentage: 70 },
          { name: 'React', percentage: 70 },
          { name: 'Webpack', percentage: 60 },
          { name: 'TypeScript', percentage: 60 }
        ],
        color: 'rgba(67, 239, 107, 1)'
      }
    },
    template: `
      <skill-set
        :categoryName="categoryName"
        :categoryIcon="categoryIcon"
        :skills="skills"
        :color="color"
      />
    `
  }))
  .add('red', () => ({
    components: { SkillSet },
    data() {
      return {
        categoryName: 'BackEnd',
        categoryIcon: 'md-cube',
        skills: [
          { name: 'Ruby', percentage: 80 },
          { name: 'Kotlin', percentage: 60 },
          { name: 'Rails', percentage: 80 },
          { name: 'SpringBoot', percentage: 60 },
          { name: 'Postgresql', percentage: 70 }
        ],
        color: 'rgba(201, 53, 53, 1)'
      }
    },
    template: `
      <skill-set
        :categoryName="categoryName"
        :categoryIcon="categoryIcon"
        :skills="skills"
        :color="color"
      />
    `
  }))
  .add('orange', () => ({
    components: { SkillSet },
    data() {
      return {
        categoryName: 'Markup',
        categoryIcon: 'md-tv',
        skills: [
          { name: 'HTML5', percentage: 80 },
          { name: 'CSS3', percentage: 80 },
          { name: 'Sass/Scss', percentage: 70 }
        ],
        color: 'rgba(241, 133, 51, 1)'
      }
    },
    template: `
      <skill-set
        :categoryName="categoryName"
        :categoryIcon="categoryIcon"
        :skills="skills"
        :color="color"
      />
    `
  }))
  .add('purple', () => ({
    components: { SkillSet },
    data() {
      return {
        categoryName: 'Others',
        categoryIcon: 'md-list',
        skills: [
          { name: 'Git', percentage: 80 },
          { name: 'Github', percentage: 80 },
          { name: 'Gitlab', percentage: 70 },
          { name: 'Docker', percentage: 70 }
        ],
        color: 'rgba(71, 66, 228, 1)'
      }
    },
    template: `
      <skill-set
        :categoryName="categoryName"
        :categoryIcon="categoryIcon"
        :skills="skills"
        :color="color"
      />
    `
  }))
  ;