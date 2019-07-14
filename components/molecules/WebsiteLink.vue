<template>
  <external-link
    :class="classNames"
    icon="md-link"
    :href="href"
    text="View Site"
  />
</template>

<script lang="ts">
import { Component, Prop, Emit, Mixins } from 'vue-property-decorator';

import ExternalLink from '@/components/molecules/ExternalLink.vue';
import ClassName from '@/components/atoms/ClassName';

@Component({
  components: {
    ExternalLink
  }
})
export default class WebsiteLink extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly href;

}
</script>
<style scoped lang="scss">
</style>