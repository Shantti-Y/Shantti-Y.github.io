<template>
  <div class="tech-skill-gauge">
    <div class="tech">
      <dev-icon className="dev-icon" :icon="icon.name" :fontType="icon.fontType" :fontSize="24" :colored="true" />
      <typography className="name" variant="h5" :text="icon.name" />
    </div>
    <div class="score-gauge">
      <div class="rate" :style="rateStyle" />
      <typography className="percentage" variant="h5" :text="`${score}%`" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Mixins, Watch } from 'vue-property-decorator';

import Typography from '@/components/atoms/Typography.vue';
import DevIcon from '@/components/atoms/DevIcon.vue';
import ClassName from '@/components/atoms/ClassName';
import { setInterval } from 'timers';

@Component({
  components: {
    DevIcon,
    Typography
  }
})
export default class TechSkillGauge extends Mixins(ClassName) {
  @Prop({ type: Object, required: true }) readonly icon;
  @Prop({ type: Number, required: true }) readonly score;

  activated = false;

  get rateStyle(){
    return {
      left: this.activated ? `calc(-100% + ${this.score}%)` : `-100%`,
      transition: '.9s'
    }
  }

  mounted(){
    const activate = () => {
      const el = this.$el as HTMLElement;
      if(window.pageYOffset >= el.offsetTop - 500){
        this.activated = true;
      }
    }
    window.addEventListener('scroll', e => activate());
  }
}
</script>
<style scoped lang="scss">
  .tech-skill-gauge {
    margin-bottom: 16px;
    .tech {
      margin-bottom: 8px;
      * {
        display: inline-block;
      }
      .dev-icon {
        width: 25px;
        height: 25px;
      }
      .name {
        margin-left: 4px;
      }
    }

    .score-gauge {
      width: 100%;
      height: 25px;
      background: #dedede;
      position: relative;
      overflow: hidden;

      .rate {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #333333;
      }

      .percentage {
        position: absolute;
        top: 5px;
        left: 8px;
        color: #ffffff;
      }
    }
  }
</style>