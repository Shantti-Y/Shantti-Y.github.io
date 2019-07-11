<template>
  <a v-if="link" class="link" :href="link" target="_blank">
    <i v-if="type === `link`" class="icon ion-md-link" />
    <i v-if="type === `github`" class="icon ion-logo-github" />
    <span>{{ text }}</span>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Container extends Vue {
  @Prop({ type: String, required: true }) readonly type;
  @Prop({ type: String, required: false }) readonly link;

  get text(){
    return this.type === 'link' ? `View Website` : `View Repository`;
  }
}
</script>
<style scoped>
.link {
  display: inline-block;
  width: 45px;
  text-align: center;
  position: relative;
  border: 1px solid #424242;
  border-radius: 5px;
}

i {
  font-size: 30px;
  padding: 4px 0;
  background-color: transparent;
  color: #424242;
  display: block;
}

span {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(50% - (16px / 2));
  font-size: 16px;
  font-weight: 600;
  color: #efefef;
  opacity: 0;
}
@media all and (min-width: 900px) {
  .link:hover {
    background-color: #424242;
    width: 150px;
    transition: .3s;
  }
  .link:hover span {
    opacity: 1;
    transition: 1s;
  }
}
@media all and (max-width: 899px) {
  .link:hover {
    background-color: #424242;
    transition: .3s;
  }
  .link:hover i  {
    color: #efefef;
    transition: .6s;
  }
}
</style>