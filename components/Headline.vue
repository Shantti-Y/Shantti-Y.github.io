<template>
  <h1 class="headline">{{ value }}</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  transition: {
    name: 'slide',
    mode: 'out-in',
    enterActiveClass: 'animated fadeInUp',
    leaveActiveClass: 'animated fadeOutDown'
  }
})
export default class Headline extends Vue {
  @Prop({ type: String, required: true }) value
}
</script>
<style>
  .headline {
    font-size: 40px;
    color: #424242;
    display: inline-block;
    margin: 16px 12px 0 0;
  }

</style>


