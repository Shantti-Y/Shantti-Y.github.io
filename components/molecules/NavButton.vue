<template>
  <nuxt-link class="nav-button" :to="to">
    <ion-icon className="ion-icon" :icon="icon" />
    <typography className="text" variant="h5" :text="name" />
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
export default class NavButton extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly to;
  @Prop({ type: String, required: true }) readonly name;
  @Prop({ type: String, required: true }) readonly icon;
}
</script>
<style scoped lang="scss">
.nav-button {
  color: #ffffff;
  text-decoration: none;
  display: inline-block;
}

@media all and (min-width: 1px){
  .nav-button {
    width: 55px;
    text-align: center;

    .ion-icon {
      font-size: 36px !important;
    }

    .text {
      display: none;
    }
  }
}
@media all and (min-width: 350px){
  .nav-button {
    text-align: center;
    width: 70px;

    .ion-icon {
      font-size: 24px !important;
      display: block;
    }

    .text {
      display: inline;
    }
  }
}
@media all and (min-width: 600px){
  .nav-button {
    width: 100px;
    margin-left: 16px;
    .ion-icon {
      font-size: 27px !important;
      display: inline-block;
    }

    .text {
      margin-left: 8px;
      display: inline;
    }
  }
}

</style>