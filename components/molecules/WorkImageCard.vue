<template>
  <div class="image-card" @click="handleClick">
    <typography variant="h3" :text="name" className="name" />
    <typography variant="h5" :text="typicalTechText" className="typical-techs" />
    <img :src="image.src" :alt="image.alt">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Mixins } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import Typography from '@/components/atoms/Typography.vue';
import ClassName from '@/components/atoms/ClassName';

@Component({
  components: {
    Typography
  }
})
export default class WorkIageCard extends Mixins(ClassName) {
  @Prop({ type: Object, required: true }) readonly image;
  @Prop({ type: String, required: true }) readonly name;
  @Prop({ type: Array, required: true }) readonly typicalTechs;

  get typicalTechText(){
    return this.typicalTechs.join(', ')
  }

  @Emit('click')
  handleClick(){}
}
</script>
<style scoped lang="scss">
.image-card {
  width: 100%;
  height: 280px;
  background: #111111;
  position: relative;
  margin-top: 6px;

  .name {
    position: absolute;
    top: calc(50% - 60px);
    color: #ffffff;
    z-index: 5;
  }
  .typical-techs {
    position: absolute;
    top: calc(50% + 20px);
    color: #ffffff;
    z-index: 5;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
  }
}

@media all and (max-width: 599px) {
  .image-card {
    .name {
      left: 32px;
    }
    .typical-techs {
      left: 32px;
    }
    img {
      opacity: 0.4;
    }
  }
}

@media all and (min-width: 600px) {
  .image-card {
    .name {
      left: -100vw;
    }
    .typical-techs {
      left: -100vw;
    }
    &:hover {
      .name {
        left: 32px;
        transition: .4s;
      }
      .typical-techs {
        left: 32px;
        transition: .4s;
      }
      img {
        opacity: 0.2;
        transition: .3s;
      }
    }
  }
}
</style>