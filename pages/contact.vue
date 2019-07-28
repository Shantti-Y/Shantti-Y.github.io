<template>
  <div id="contact">
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import Typography from '@/components/atoms/Typography.vue';

@Component({
  head(){
    return {
      title: 'Contact'
    }
  },
  components: {
    Typography
  }
})
export default class ContactPage extends Vue {
  @Action('background/changeImage') readonly changeImage;

  get backgroundImage(): string {
    return require('@/assets/images/background/contact.jpg');
  }

  created(){
    this.changeImage(this.backgroundImage);
  }
}
</script>
<style scoped lang="scss">
#contact {
}
</style>