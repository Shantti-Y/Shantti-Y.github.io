<template>
  <div class="contact-form">
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="/"
    >
      <text-field
        className="field"
        field="name"
        :valid="true"
        :value="form.name"
        @update:value="newValue => updateValue('name', newValue)"
      />
      <text-field
        className="field"
        field="email"
        :valid="true" 
        :value="form.email"
        @update:value="newValue => updateValue('email', newValue)"
      />
      <textarea-field
        className="field"
        field="message"
        :valid="true"
        :value="form.message"
        @update:value="newValue => updateValue('message', newValue)"
      />
      <button @click="sendMailToMe">send</button>
    </form>
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
  form = {
    name: '',
    email: '',
    message: ''
  }

  @Emit()
  updateValue(key, newValue){
    this.form[key] = newValue;
  }

  @Emit()
  sendMailToMe(){
    fetch('/sendMail', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(this.form)
    });
  }

  created(){
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