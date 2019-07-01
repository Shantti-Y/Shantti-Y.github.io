<template>
  <div>
    <h1>About Me</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AboutPage extends Vue {
  layout = 'default'
}
</script>