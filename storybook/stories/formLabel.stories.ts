import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import FormLabel from '@/components/atoms/FormLabel.vue';

storiesOf('atoms/FormLabel', module)
  .add('plane', () => ({
    components: { FormLabel },
    data() {
      return { field: 'Your Name' }
    },
    template: '<form-label :field="field" />'
  }))
;