<template>
  <div class="skill-list">
    <div class="headline">
      <div class="icon">
        <ion-icon :icon="headline.iconName" :fontSize="50" />
      </div>
      <typography variant="h4" :text="headline.name" />
    </div>
    <div class="techs">
      <tech-skill-gauge
        v-for="(tech, idx) in techs"
        :key="idx"
        :icon="tech.icon"
        :score="tech.score"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Mixins, Watch } from 'vue-property-decorator';

import Typography from '@/components/atoms/Typography.vue';
import TechSkillGauge from '@/components/molecules/TechSkillGauge.vue';
import IonIcon from '@/components/atoms/IonIcon.vue';
import ClassName from '@/components/atoms/ClassName';

@Component({
  components: {
    TechSkillGauge,
    IonIcon,
    Typography
  }
})
export default class SkillRow extends Mixins(ClassName) {
  @Prop({ type: Array, required: true }) readonly techs;
  @Prop({ type: Object, required: true }) readonly headline;
}
</script>
<style scoped lang="scss">
.skill-list {
  margin-bottom: 80px;
  .headline {
    text-align: center;
  }
  .techs {
    
  }
}
@media all and (max-width: 599px) {
  .skill-list {
    
    .headline {
      margin-bottom: 8px;
    }
    .techs {
    }
  }
}

@media all and (min-width: 600px) {
  .skill-list {
    overflow: hidden;
    
    .headline {
      float: left;
      width: 150px;
    }
    .techs {
      float: right;
      width: calc(100% - 180px);
    }
  }
}
</style>