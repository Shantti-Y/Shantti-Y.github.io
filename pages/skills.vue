<template>
  <div id="skills">
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import Typography from '@/components/atoms/Typography.vue';

@Component({
  head(){
    return {
      title: 'Skills'
    }
  },
  components: {
    Typography,
  }
})
export default class SkillsPage extends Vue {
  @Action('background/changeImage') readonly changeImage;

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
}
</style>