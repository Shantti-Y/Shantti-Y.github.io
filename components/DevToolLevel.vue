<template>
  <dl>
    <dt class="item">
      <dl>
        <dt class="item-info item-icon"><i :class="[deviconName]" /></dt>
        <dd class="item-info item-name">{{ tool.name }}</dd>
      </dl>
    </dt>
    <dd class="item">
      <i class="icon" :class="[`ion-md-${starIcon(0)}`]" />
      <i class="icon" :class="[`ion-md-${starIcon(1)}`]" />
      <i class="icon" :class="[`ion-md-${starIcon(2)}`]" />
      <i class="icon" :class="[`ion-md-${starIcon(3)}`]" />
      <i class="icon" :class="[`ion-md-${starIcon(4)}`]" />
    </dd>
  </dl>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class Container extends Vue {
  @Prop({ type: Object, required: true }) readonly devTool;

  get tool(){
    return this.devTool.tool;
  }

  get level(){
    return this.devTool.level;
  }

  get deviconName(){
    return `devicon-${this.tool.name}-${this.tool.fontType}`;
  }

  @Emit()
  starIcon(level){
    if(this.level - level <= 0) return 'star-outline';
    if(this.level - level === 0.5) return 'star-half';
    if(this.level - level >= 1) return 'star';
  }
}
</script>
<style scoped>
dl {
  display: block;
  margin-top: 8px;
  height: 34px;
}
.item {
  display: inline-block;
}
dt {
  width: 125px;
}
.item-icon {
  width: 26px;
  height: 26px;
}
.item-icon i {
  font-size: 26px;
}
.item-info {
  display: inline-block;
}
dd i {
  font-size: 22px;
  color: #424242;
}
</style>