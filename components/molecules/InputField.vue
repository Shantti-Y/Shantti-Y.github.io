<template>
<div class="input-field">
  <field-label :field="field" />
  <input-element
    :id="field"
    class="input-element"
    :value="value"
    @update:value="newValue => handleChange(newValue)"
  />
</div>

</template>

<script lang="ts">
import { Component, Prop, Emit, Mixins } from 'vue-property-decorator';

import FieldLabel from '@/components/atoms/FieldLabel.vue';
import InputElement from '@/components/atoms/InputElement.vue';
import IonIcon from '@/components/atoms/IonIcon.vue';
import ClassName from '@/components/atoms/ClassName';

@Component({
  components: {
    FieldLabel,
    InputElement,
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
.input-field {
  margin-bottom: 32px;

  .input-element {
    margin-top: 8px;
    box-sizing: border-box;
  }
}
</style>