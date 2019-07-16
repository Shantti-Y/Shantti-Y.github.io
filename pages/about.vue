<template>
  <div id="about">
    <page-container headline="About">
      <typography className="topic" variant="h2" text="Introduction" />
      <div class="introduction">
        <div class="profile-image">
          <img :src="require('~/assets/images/about/profile.jpg')" alt="Takahiro Yoshioka">
        </div>
        <div class="profile-description">
          <typography variant="h4" text="Let me introduce myself.." />
          <typography variant="p" text="I'm Takahiro Yoshioka. You can call me like 'Taka', 'Shantti-Y'." />
          <typography variant="p" text="I've been working as a Full-stack Web Developer in Japan for more than one year so that familiar with building a bridge between client-side and server-side." />
          <typography variant="p" text="My mission is to create applications with dynamic, intuitive, and great user-interfaces in a component based architecture using virtual DOM frameworks such as Vue.js or React... etc." />
          <typography variant="h5" text="Please contact me if you get interested in me!" />
        </div>
      </div>
      <typography className="topic" variant="h2" text="Skills" />
      <div class="skills">
        <skill-list :headline="javascriptSkills.headline" :techs="javascriptSkills.techs" />
        <skill-list :headline="backendSkills.headline" :techs="backendSkills.techs" />
        <skill-list :headline="markupDesignSkills.headline" :techs="markupDesignSkills.techs" />
        <skill-list :headline="otherSkills.headline" :techs="otherSkills.techs" />
      </div>
      <navigation-link className="navigation-link" to="/works" text="View out my work" />
    </page-container>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import PageContainer from '@/components/organisms/PageContainer.vue';
import SkillList from '@/components/organisms/SkillList.vue';
import Typography from '@/components/atoms/Typography.vue';
import NavigationLink from '@/components/molecules/NavigationLink.vue';

import { devIconList } from '@/utils/devicons';

@Component({
  head(){
    return {
      title: 'About'
    }
  },
  components: {
    Typography,
    PageContainer,
    SkillList,
    NavigationLink
  }
})
export default class AboutPage extends Vue {
  javascriptSkills = {
    headline: { name: "JavaScript", iconName: 'logo-javascript' },
    techs: [
      { icon: devIconList.javascript, score: 80 },
      { icon: devIconList.vuejs, score: 70 },
      { icon: devIconList.react, score: 70 },
      { icon: devIconList.webpack, score: 60 },
      { icon: devIconList.typescript, score: 60 }
    ]
  };

  backendSkills = {
    headline: { name: "Backend", iconName: 'md-cube' },
    techs: [
      { icon: devIconList.ruby, score: 80 },
      { icon: devIconList.kotlin, score: 60 },
      { icon: devIconList.rails, score: 80 },
      { icon: devIconList.springboot, score: 60 },
      { icon: devIconList.postgresql, score: 70 }
    ]
  };

  markupDesignSkills = {
    headline: { name: "Markup", iconName: 'md-tv' },
    techs: [
      { icon: devIconList.html5, score: 80 },
      { icon: devIconList.css3, score: 80 },
      { icon: devIconList.sass, score: 70 }
    ]
  };
  
  otherSkills = {
    headline: { name: "Others", iconName: 'md-list' },
    techs: [
      { icon: devIconList.git, score: 80 },
      { icon: devIconList.github, score: 80 },
      { icon: devIconList.gitlab, score: 70 },
      { icon: devIconList.docker, score: 70 }
    ]
  }
}
</script>
<style scoped lang="scss">
#about {
  .topic {
      margin-bottom: 34px;
    }
  .introduction {
    margin-bottom: 60px;
    .profile-image {
      margin-bottom: 20px;
      img {
        border-radius: 4px;
      }
    }
  }
  .navigation-link {
    float: right;
  }
}

@media all and (max-width: 599px) {
  #about {
    .introduction {
      .profile-image {
        text-align: center;
        
        img {
          width: 40%;
          height: 40%;
        }
      }
    }
  }
}

@media all and (min-width: 600px) {
  #about {
    .introduction {
      overflow: hidden;
      .profile-image {
        float: left;
        img {
          width: 160px;
          height: 160px;
        }
      }
      .profile-description {
        float: right;
        width: calc(100% - 180px);
      }
    }
  }
}
</style>