<template>
  <external-link
    :class="classNames"
    icon="logo-github"
    :href="href"
    text="View Repo"
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
export default class GithubRepositoryLink extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly href;

}
</script>
<style scoped lang="scss">
</style>