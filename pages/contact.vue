<template>
  <div id="contact">
    <page-container headline="Contact">
      <mail-form />
    </page-container>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import Typography from '@/components/atoms/Typography.vue';
import PageContainer from '@/components/organisms/PageContainer.vue';
import MailForm from '@/components/organisms/MailForm.vue';

@Component({
  head(){
    return {
      title: 'Contact'
    }
  },
  components: {
    Typography,
    PageContainer,
    MailForm
  }
})
export default class ContactPage extends Vue {

}
</script>
<style scoped lang="scss">
#contact {
}
</style>