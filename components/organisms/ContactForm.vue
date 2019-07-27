<template>
  <div class="contact-form">
    <text-field className="field" field="name" valid="true" :value="data.name" @update:value="newValue => updateValue('name', newValue)" />
    <text-field className="field" field="email" valid="true" :value="data.email" @update:value="newValue => updateValue('email', newValue)" />
    <textarea-field className="field" field="message" valid="true" :value="data.message" @update:value="newValue => updateValue('message', newValue)" />
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop, Emit } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';
import TextField from '@/components/molecules/TextField.vue';
import TextareaField from '@/components/molecules/TextareaField.vue';

@Component({
  components: {
    TextField,
    TextareaField
  }
})
export default class ContactForm extends Mixins(ClassName) {
  data = {
    name: '',
    email: '',
    message: ''
  }

  @Emit()
  updateValue(key, newValue){
    this.data[key] = newValue;
  }
}
</script>
<style lang="scss" scoped>
  .contact-form {
    .field {
      margin-bottom: 40px;
    }
  }
</style>