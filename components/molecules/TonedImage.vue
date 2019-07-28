<template>
  <div class="toned-image" :class="classNames">
    <div class="work-image-container">
      <work-image className="work-image" :src="imgSrc" :alt="name" />
    </div>
    <div class="work-header">
      <typography className="typography work-name" variant="h4" :text="name" />
      <typography className="typography work-role" variant="h5" :text="role" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import WorkImage from '@/components/atoms/WorkImage.vue';
import Typography from '@/components/atoms/Typography.vue';

@Component({
  components: {
    WorkImage,
    Typography
  }
})
export default class TonedImage extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly imgSrc;
  @Prop({ type: String, required: true}) readonly name;
  @Prop({ type: String, required: true}) readonly role;
}
</script>
<style lang="scss" scoped>
  .toned-image {
    

    .work-image-container {
      background-color: rgba(2, 0, 40, 1);
      position: relative;
      .work-image {
        opacity: 0.5;
        
      }
    }

    .work-header {
      margin: 0 16px;

      .typography {
        color: rgba(143, 143, 143, 1);
      }
      .work-name {
        margin-top: 16px;
      }
      .work-role {
        margin-top: 6px;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  @media all and (max-width: 599px) {
    .toned-image {
      width: 100%;

      .work-image-container {
        width: 100%;
        max-height: 300px;

        .work-image {
          max-height: 300px;
        }
      }
    }
  }
  @media all and (min-width: 600px) {
    .toned-image {
      width: 410px;

      .work-image-container {
        width: 100%;
        height: 275px;
      }
    }
  }
</style>