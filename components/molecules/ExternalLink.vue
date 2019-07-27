<template>
  <div class="external-link" :class="classNames">
    <ion-icon class="ion-icon" :name="iconName" :size="38" :style="colorStyle" />
    <text-link class="text-link" :text="name" :path="url" :external="true" :style="colorStyle" />
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import IonIcon from '@/components/atoms/IonIcon.vue';
import TextLink from '@/components/atoms/TextLink.vue';

@Component({
  components: {
    IonIcon,
    TextLink
  }
})
export default class ExternalLink extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly name;
  @Prop({ type: String, required: true }) readonly iconName;
  @Prop({ type: String, required: true }) readonly url;
  @Prop({ type: String, required: true }) readonly color;

  get colorStyle(): object {
    return {
      color: this.color
    };
  }
}
</script>
<style lang="scss" scoped>
  .external-link {
    .ion-icon {
    }

    .text-link {
      margin-left: 6px;
      font-size: 19px;
      font-weight: bold;
    }
  }
</style>