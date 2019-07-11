<template>
  <div id="default">
    <header-nav />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HeaderNav from '@/components/Header/Main.vue';

@Component({
  components: {
    HeaderNav
  }
})
export default class DefaultLayout extends Vue {
}
</script>
<style>
</style>