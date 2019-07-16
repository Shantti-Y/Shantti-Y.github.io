<template>
<a
  :href="href"
  target="_blank"
  class="external-link"
  :class="classNames"

>
  <ion-icon :icon="icon" :fontSize="24" />
  <span>{{ text }}</span>
</a>
</template>

<script lang="ts">
import { Component, Prop, Emit, Mixins } from 'vue-property-decorator';

import IonIcon from '@/components/atoms/IonIcon.vue';
import ClassName from '@/components/atoms/ClassName';

@Component({
  components: {
    IonIcon
  }
})
export default class ExternalLink extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly icon;
  @Prop({ type: String, required: true }) readonly href;
  @Prop({ type: String, required: true }) readonly text;

}
</script>
<style scoped lang="scss">
  .external-link {
    display: inline-block;
    border: 1px solid #bf360c;
    margin-right: 16px;
    color: #ffffff;
    background: #bf360c;
    text-decoration: none;

    &:last-child {
      margin-right: 0;
    }

    span {
      margin-left: 6px;
      font-size: 15px;
      font-weight: 600;
    }

    &:hover {
      transition: .3s;
      color: #bf360c;
      background: #ffffff;
      border: 1px solid #cccccc;
    }
  }

  @media all and (max-width: 599px) {
    .external-link {
      padding: 12px;
      margin-right: 6px;
    }
  }
  @media all and (min-width: 600px) {
    .external-link {
      padding: 12px 20px;
    }
  }
</style>