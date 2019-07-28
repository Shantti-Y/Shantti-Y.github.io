<template>
  <div id="works">
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component({
  head(){
    return {
      title: 'Works'
    }
  }
})
export default class WorksPage extends Vue {
  @Action('background/changeImage') readonly changeImage;

  get backgroundImage(): string {
    return require('@/assets/images/background/works.jpg');
  }

  created(){
    this.changeImage(this.backgroundImage);
  }
}
</script>
<style scoped lang="scss">
#works {
}
</style>