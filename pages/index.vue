<template>
  <div id="index">
    d
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import Typography from '@/components/atoms/Typography.vue';

@Component({
  head(){
    return {
      title: 'Welcome'
    }
  },
  components: {
    Typography
  }
})
export default class IndexPage extends Vue {
  @Action('background/changeImage') readonly changeImage;

  get backgroundImage(): string {
    return require('@/assets/images/background/index.jpg');
  }

  created(){
    this.changeImage(this.backgroundImage);
  }
}
</script>
<style lang="scss" scoped>
#index {
}

</style>