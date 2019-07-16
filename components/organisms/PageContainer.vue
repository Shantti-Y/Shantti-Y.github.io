<template>
  <div class="page-container">
    <headline :text="headline" />
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';

import Headline from '@/components/molecules/Headline.vue';
import ClassName from '@/components/atoms/ClassName';

@Component({
  components: {
    Headline
  }
})
export default class PageContainer extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly headline;
}
</script>
<style scoped lang="scss">
  .page-container {
    margin: 0 auto;
    width: 100vw;
    max-width: 900px;
    box-sizing: border-box;
    padding: 85px 16px 100px 16px;
  }
</style>


