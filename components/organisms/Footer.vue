<template>
  <div class="footer">
    <div class="icons">
      <a class="account-link" href="https://github.com/Shantti-Y" target="_blank">
        <ion-icon icon="logo-octocat" :fontSize="34" />
      </a>
      <a class="account-link" href="https://www.linkedin.com/in/takahiro-yoshioka-a4207a141/" target="_blank">
        <ion-icon icon="logo-linkedin" :fontSize="34" />
      </a>
      <a class="account-link" href="https://www.facebook.com/hammpilot?ref=bookmarks" target="_blank">
        <ion-icon icon="logo-facebook" :fontSize="34" />
      </a>
    </div>
    <typography className="copyright" variant="h5" :text="copyright" />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Mixins, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';

import dayjs from 'dayjs';

import Typography from '@/components/atoms/Typography.vue';
import IonIcon from '@/components/atoms/IonIcon.vue';
import ClassName from '@/components/atoms/ClassName';

@Component({
  components: {
    Typography,
    IonIcon
  }
})
export default class Footer extends Mixins(ClassName) {

  get copyright(){
    const currentYear = dayjs().year();
    if(2019 === currentYear){
      return `Takahiro Yoshioka ©2019`;
    }else{
      return `Takahiro Yoshioka ©2019 - ${currentYear}`;
    }
  }
}
</script>
<style scoped lang="scss">
.footer {
  text-align: center;
  padding: 55px 0 80px 0;
  background: #cccccc;

  * {
    color: #000000;
  }
  .icons {
    margin-bottom: 12px;
    .account-link {
      margin: 0 12px;

    }
  }
  .copyright {

  }
}

</style>