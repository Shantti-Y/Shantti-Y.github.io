<template>
  <container color="#c79989" :priority="1" headline="Hello">
    <p>Hi, I'm Takahiro Yoshioka.</p>
    <p>I've been working at a company in Japan as a full-stack software developer for nearly two years so that I'm familiar with both front-end and back-end programming languages(also, their frameworks).</p>
    <p>Now, I'm eager to build web applications with modern, rich, and user friendly desgined.</p>
    <p>It's nice to see you.</p>
  </container>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import Container from '@/components/Container.vue';

@Component({
  components: {
    Container
  }
})
export default class IndexContent extends Vue {
}
</script>
<style>
  p {
    line-height: 140%;
    margin-bottom: 6px;
  }
</style>


