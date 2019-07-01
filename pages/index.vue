<template>
  <div>
    <h1>Hello</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RootPage extends Vue {
  layout = 'default'
}
</script>
