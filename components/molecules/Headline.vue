<template>
  <div class="headline">
    <typography variant="h1" :text="text" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';

import Typography from '@/components/atoms/Typography.vue';
import ClassName from '@/components/atoms/ClassName';

@Component({
  components: {
    Typography
  }
})
export default class Headline extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly text;
}
</script>
<style scoped lang="scss">
  .headline {
    font-size: 40px;
    color: #424242;
    display: inline-block;
    padding-bottom: 6px;
    margin: 16px 0 72px 0;

    border-bottom: 3px solid #870000;
  }

</style>