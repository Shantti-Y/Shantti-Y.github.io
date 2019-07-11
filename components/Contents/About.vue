<template>
  <container color="#8fb8cc" :priority="2" headline="About">
    <div class="wrapper">
      <div class="selector">
        <div class="option" :class="{ active: activeCategory === 'languages' }" @click="() => changeActiveCategory('languages')"><i class="icon ion-md-code" /></div>
        <div class="option" :class="{ active: activeCategory === 'frameworks' }" @click="() => changeActiveCategory('frameworks')"><i class="icon ion-md-speedometer" /></div>
        <div class="option" :class="{ active: activeCategory === 'othertools' }" @click="() => changeActiveCategory('othertools')"><i class="icon ion-md-hammer" /></div>
      </div>
      <div class="category" :class="{ inactive: activeCategory !== 'languages' }">
        <h2>Languages</h2>
        <dev-tool-level v-for="(language, idx) in languages" :key="idx" :devTool="language" />
      </div>
      <div class="category" :class="{ inactive: activeCategory !== 'frameworks' }">
        <h2>Frameworks</h2>
        <dev-tool-level v-for="(framework, idx) in frameworks" :key="idx" :devTool="framework" />
      </div>
      <div class="category" :class="{ inactive: activeCategory !== 'othertools' }">
        <h2>Other Tools</h2>
        <dev-tool-level v-for="(other, idx) in others" :key="idx" :devTool="other" />
      </div>
    </div>
  </container>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import Container from '@/components/Container.vue';
import DevToolLevel from '@/components/DevToolLevel.vue';

import { devIconList } from '@/utils/devicons';

@Component({
  components: {
    Container,
    DevToolLevel
  }
})
export default class AboutContent extends Vue {

  activeCategory = "languages";
  languages = [
    { tool: devIconList.html5, level: 5 },
    { tool: devIconList.css3, level: 5 },
    { tool: devIconList.sass, level: 4 },
    { tool: devIconList.javascript, level: 4 },
    { tool: devIconList.nodejs, level: 3 },
    { tool: devIconList.babel, level: 4.5 },
    { tool: devIconList.typescript, level: 3.5 },
    { tool: devIconList.ruby, level: 5 },
    { tool: devIconList.kotlin, level: 3.5 }
  ];
  frameworks = [
    { tool: devIconList.rails, level: 4.5 },
    { tool: devIconList.springboot, level: 3.5 },
    { tool: devIconList.vuejs, level: 4 },
    { tool: devIconList.nuxt, level: 4 },
    { tool: devIconList.react, level: 4 }
  ];
  others = [
    { tool: devIconList.webpack, level: 3.5 },
    { tool: devIconList.postgresql, level: 4 },
    { tool: devIconList.firebase, level: 2.5 },
    { tool: devIconList.git, level: 5 },
    { tool: devIconList.github, level: 4 },
    { tool: devIconList.gitlab, level: 3 }
  ];

  @Emit()
  changeActiveCategory(category){
    this.activeCategory = category;
  }
}
</script>
<style scoped>
  .wrapper {
    overflow: hidden;
    width: 100%;
    margin-top: 32px;
    position: relative;
  }
  .selector {
    position: absolute;
    right: 0;
  }
  h2 {
    font-size: 22px;
    margin-bottom: 28px;
  }

  .option {
    display: inline-block;
    width: 46px;
    padding: 4px 0;
    text-align: center;
    border: 1px solid #424242;
    border-radius: 5px;
  }
  .option i {
    font-size: 26px;
    color: #424242;
  }
  .option:hover {
    cursor: pointer;
    background-color: #424242;
    transition: .5s;
  }
  .option:hover i {
    color: #fefefe;
  }
  .option.active {
    background-color: #424242;
  }
  .option.active i {
    color: #fefefe;
  }
  @media all and (max-width: 899px) {
    .category {
      display: block;
      transition: .6s;
    }
    .inactive {
      display: none;
    }
  }
  @media all and (min-width: 900px) {
    .category {
      float: left;
      margin-right: 42px;
    }
    .selector {
      display: none;
    }
  }
</style>