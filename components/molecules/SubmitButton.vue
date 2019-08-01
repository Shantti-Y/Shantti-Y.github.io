<template>
  <button class="submit-button" @click="handleSubmit"><typography variant="span" :text="text" /></button>
</template>
<script lang="ts">
import { Component, Mixins, Prop, Emit } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import Typography from '@/components/atoms/Typography.vue';

@Component({
  components: {
    Typography
  }
})
export default class ContactForm extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly text;

  @Emit('submit')
  handleSubmit(){}
}
</script>
<style lang="scss" scoped>
  .submit-button {
    padding: 7px 12px;
    border: 2px solid #00ff9f;
    border-radius: 4px;
    background: transparent;
    color: #00ff9f;
    font-weight: bold;
  }
</style>