<template>
<div class="dev-tool" :class="classNames">
  <dev-icon
    className="dev-icon"
    :icon="icon.name"
    :fontType="icon.fontType"
    :fontSize="19"
  />
  <span>{{ icon.name }}</span>
</div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Mixins, Watch } from 'vue-property-decorator';

import DevIcon from '@/components/atoms/DevIcon.vue';
import ClassName from '@/components/atoms/ClassName';

@Component({
  components: {
    DevIcon
  }
})
export default class DevTool extends Mixins(ClassName) {
  @Prop({ type: Object, required: true }) readonly icon;
}
</script>
<style scoped lang="scss">
.dev-tool {
  display: inline-block;
  margin: 0 12px 12px 0;
  padding: 4px 8px;
  border: 1px solid #cccccc;
  margin-bottom: 8pxh;
  
  .dev-icon {
    height: 20px;
    width: 1px;
    color: #676767;
  }

  span {
    font-size: 14px;
    color: #676767;
  }
}
</style>