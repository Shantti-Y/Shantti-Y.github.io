<template>
  <div class="mail-form">
    <input-field
      field="name"
      :value="text('name')"
      icon="md-person"
      @change="value => changeValue({ field: 'name', value })"
    />
    <input-field
      field="email"
      :value="text('email')"
      icon="md-mail"
      @change="value => changeValue({ field: 'email', value })"
    />
    <textarea-field
      field="message"
      :value="text('message')"
      icon="md-chatboxes"
      @change="value => changeValue({ field: 'message', value })"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Mixins, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import Typography from '@/components/atoms/Typography.vue';
import InputField from '@/components/molecules/InputField.vue';
import TextareaField from '@/components/molecules/TextareaField.vue';
import ClassName from '@/components/atoms/ClassName';

@Component({
  components: {
    Typography,
    InputField,
    TextareaField
  }
})
export default class ContactPage extends Mixins(ClassName) {
  @Getter('mailForm/text') readonly text;
  @Action('mailForm/changeValue') readonly changeValue;
}
</script>
<style scoped lang="scss">
.mail-form {
  box-sizing: border-box;
}

@media all and (max-width: 599px) {
  .mail-form {
    padding: 0 32px;
    width: 100%;
  }
}

@media all and (min-width: 600px) {
  .mail-form {
    margin: 0 auto;
    width: 500px;
  }
}
</style>