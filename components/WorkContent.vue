<template>
  <div class="contents">
    <div class="about">
      <p class="description">{{ description }}</p>
      <devtools :icons="devicons" />
    </div>
    <div class="screen-shots">
      <carousel
        :screenShotsForDesktop="screenShotsForDesktop"
        :screenShotsForMobile="screenShotsForMobile"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

import Devtools from '@/components/Devtools/Main.vue';
import Carousel from '@/components/ScreenShot/Carousel.vue';

@Component({
  components: {
    Devtools,
    Carousel
  }
})
export default class FirstWorkContent extends Vue {
  @Prop({ type: Array, required: true, default: [] }) readonly screenShotsForDesktop;
  @Prop({ type: Array, required: true, default: [] }) readonly screenShotsForMobile;
  @Prop({ type: Array, required: true, default: [] }) readonly devicons;
  @Prop({ type: String, required: true, default: "" }) readonly description;
}
</script>
<style>
.contents {
  overflow: hidden;
  width: 100%;
}
.description {
  font-size: 14px;
  line-height: 135%;
}

.about {

}

@media all and (min-width: 900px) {
  .screen-shots {
    width: 65%;
    float: right;
  }
  .description {
    margin-top: 32px;
  }
  .about {
    width: 35%;
    float: left;
  }
}
@media all and (max-width: 899px) {
  .screen-shots {
    width: 100%;
  }
  .description {
    margin-top: 16px;
  }
  .about {
    width: 100%;
  }
}
</style>
