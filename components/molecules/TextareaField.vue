<template>
<div class="textarea-field">
  <field-label :field="field" />
  <textarea-element
    :id="field"
    class="textarea-element"
    :value="value"
    @update:value="newValue => handleChange(newValue)"
  />
</div>

</template>

<script lang="ts">
import { Component, Prop, Emit, Mixins } from 'vue-property-decorator';

import FieldLabel from '@/components/atoms/FieldLabel.vue';
import TextareaElement from '@/components/atoms/TextareaElement.vue';
import IonIcon from '@/components/atoms/IonIcon.vue';
import ClassName from '@/components/atoms/ClassName';

@Component({
  components: {
    FieldLabel,
    TextareaElement,
    IonIcon
  }
})
export default class InputField extends Mixins(ClassName) {
  @Prop({ type: String, required: true }) readonly field;
  @Prop({ type: String, required: true }) readonly value;

  @Emit('change')
  handleChange(newValue){
    return newValue;
  }
}
</script>
<style scoped lang="scss">
.textarea-field {
  margin-bottom: 32px;

  .textarea-element {
    margin-top: 20px;
    box-sizing: border-box;
  }
}
</style>