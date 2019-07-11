<template>
  <div
    class="container"
    :style="componentStyle"
  >
    <div class="content-wrapper">
      <div class="header">
        <headline :value="headline" />
        <external-link type="github" :link="githubRepository" />
        <external-link type="link" :link="livedemo" />
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { setTimeout, clearTimeout } from 'timers';

import Headline from '@/components/Headline.vue';
import ExternalLink from '@/components/ExternalLink.vue';

@Component({
  components: {
    Headline,
    ExternalLink
  }
})
export default class Container extends Vue {
  @Prop({ type: String, required: true }) readonly color;
  @Prop({ type: Number, required: true }) readonly priority;
  @Prop({ type: String, required: true }) readonly headline;
  @Prop({ type: String, required: false, default: "" }) readonly githubRepository;
  @Prop({ type: String, required: false, default: "" }) readonly livedemo;

  @Getter('container/currentPriority') readonly currentPriority;

  resized = false

  @Watch('isActive')
  onIsActiveChanged(val, oldVal){
    this.resized = true;
    setTimeout(() => {this.resized = false; }, 600);
  }

  get isActive(){
    return this.currentPriority >= this.priority;
  }
  
  get isCurrent(){
    return this.currentPriority === this.priority;
  }

  get componentStyle(){
    const transition = this.resized ? '0.6s' : '0s';
    return {
      background: this.color,
      zIndex: this.priority,
      transition: transition,
      top: this.position
    }
  }

  get position(){
    return this.isActive ? '0' : '-100%';
  }

  get shouldDisplayPrev(){
    return this.priority > 1;
  }

  get shouldDisplayNext(){
    return this.priority <= 4;
  }
}
</script>
<style scoped>
.container {
  padding: 65px 24px 24px 24px;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  position: absolute;
  left: 0;
}
.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
.content {
  margin-top: 16px;
}
</style>