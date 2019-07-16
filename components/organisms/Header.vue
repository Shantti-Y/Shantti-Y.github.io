<template>
  <div>
    <div class="header-main">
      <nuxt-link class="content full-name" to="/">
        <typography className="text" variant="h4" text="Shantti-Y" />
      </nuxt-link>
      <div class="menus">
        <nav-button
          to="/about"
          name="About"
          icon="md-document"
        />
        <nav-button
          to="/works"
          name="Works"
          icon="md-code-working"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';

import Typography from '@/components/atoms/Typography.vue';
import NavButton from '@/components/molecules/NavButton.vue';
import ClassName from '@/components/atoms/ClassName';

@Component({
  components: {
    Typography,
    NavButton
  }
})
export default class Header extends Mixins(ClassName) {
}
</script>
<style scoped lang="scss">
.header-main {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  overflow: hidden;
  box-sizing: border-box;
  background: #301c00;
  height: 70px;
  border-bottom: 1px solid #cccccc;

  .full-name {
    position: absolute;
    top: calc(50% - (18px / 2));
    left: 16px;
    text-decoration: none;
    color: #fffffF;
  }

  .menus {
    position: absolute;
    top: calc(50% - (34px / 2));
    right: 16px;
    text-decoration: none;
    color: #fffffF;
  }
}

</style>