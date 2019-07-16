<template>
  <nuxt-link
    :to="to"
    class="navigation-link"
    :class="[classNames]"
  >
    <span>{{ text }}</span>
    <ion-icon className="arrow" icon="md-arrow-forward" :fontSize="24" />
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';

import Typography from '@/components/atoms/Typography.vue';
import IonIcon from '@/components/atoms/IonIcon.vue';
import ClassName from '@/components/atoms/ClassName';

@Component({
  components: {
    Typography,
    IonIcon
  }
})
export default class NavigationLink extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly to;
  @Prop({ type: String, required: true }) readonly text;
  @Prop({ type: Boolean, required: false, default: false}) readonly light;
}
</script>
<style scoped lang="scss">
// style is same as External.vue
  .navigation-link {
    display: inline-block;
    border: 2px solid #cccccc;
    color: #ffffff;
    background: #301c00;
    text-decoration: none;
    padding: 12px 20px;

    .arrow {
      color: #ffffff;
    }

    span {
      margin-right: 8px;
      font-size: 15px;
      font-weight: 600;
    }

    &:hover {
      transition: .3s;
      color: #301c00;
      background: #ffffff;
      border: 2px solid #cccccc;
      

      .arrow {
        color: #301c00;
        transition: .3s;
      }
    }
  }
</style>