<template>
  <div id="default">
    <header-nav />
    <nuxt />
    <footer-nav />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HeaderNav from '@/components/organisms/Header.vue';
import FooterNav from '@/components/organisms/Footer.vue';

@Component({
  components: {
    HeaderNav,
    FooterNav
  }
})
export default class DefaultLayout extends Vue {
}
</script>
<style scoped lang="scss">
#default {

}
</style>