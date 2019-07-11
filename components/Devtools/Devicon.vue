<template>
  <span class="devicon">
    <i :class="[deviconName]" />
    {{ name }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Devicon extends Vue {
  @Prop({ type: String, required: true }) readonly name
  @Prop({ type: String, required: true }) readonly fontType

  get deviconName(){
    return `devicon-${this.name}-${this.fontType}`;
  }
}
</script>
<style scoped>
  .devicon {
    color: #efefef;
    padding: 6px 8px;
    background: #333333;
    text-align: center;
    display: inline-block;
    font-size: 14px;
    margin: 0 6px 6px 0;
  }
  i {
    font-size: 18px;
  }
</style>