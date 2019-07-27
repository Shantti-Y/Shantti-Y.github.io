<template>
  <div class="text-field" :class="classNames">
    <form-label :className="`form-label ${errorClassName}`" :field="field" />
    <text-input :className="`textarea-input ${errorClassName}`" :field="field" v-model="modelValue" />
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop, PropSync } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import FormLabel from '@/components/atoms/FormLabel.vue';
import TextInput from '@/components/atoms/TextInput.vue';

@Component({
  components: {
    FormLabel,
    TextInput
  }
})
export default class TextareaField extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly field;
  @Prop({ type: Boolean, required: true}) readonly valid;
  @PropSync('value', { type: String, required: true }) readonly modelValue!: string;

  get errorClassName(): string {
    return this.valid ? `` : `error`;
  }
}
</script>
<style lang="scss" scoped>
  .text-field {
    position: relative;

    .form-label {
      position: absolute;
      top: -9px;
    }

    .text-input {

    }
  }
</style>