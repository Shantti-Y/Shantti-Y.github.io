<template>
  <div id="default">
    <nuxt />
    <nuxt-link v-if="prevLinkPath !== null" :to="prevLinkPath">☜ Prev</nuxt-link>
    <nuxt-link v-if="nextLinkPath !== null" :to="nextLinkPath">Next ☞</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class DefaultLayout extends Vue {
  @Getter('prevLinkPath') prevLinkPath
  @Getter('nextLinkPath') nextLinkPath
}
</script>

