<template>
  <div id="root">
    <div class="jumbotron" :style="jumbotronStyle">
      <div class="contents">
        <typography className="welcome banner" variant="h1" text="Welcome" />
        <typography className="banner" variant="h4" text="Takahiro Yoshioka (Shantti-Y)" />
        <typography className="banner" variant="h4" text="A full-stack web developer." />

        <navigation-link to="/about" text="Introduce myself" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import Typography from '@/components/atoms/Typography.vue';
import NavigationLink from '@/components/molecules/NavigationLink.vue';

@Component({
  components: {
    Typography,
    NavigationLink
  }
})
export default class RootPage extends Vue {
  get jumbotronStyle(){
    return {
      background: `url(${require('~/assets/images/background/index.jpg')})`
    }
  }
}
</script>
<style scoped lang="scss">
#root {
  .jumbotron {
    background: black;
    height: 100vh;
    text-align: center;
    position: relative;

    .contents {
      position: absolute;
      top: 25%;
      left: 13%;
      right: 13%;

      .banner {
        color: #ffffff;
        margin-bottom: 26px;
        text-align: left;
      }

      .welcome {
        font-size: 50px;
        margin-bottom: 48px;
      }
    }
  }
}

</style>