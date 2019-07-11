<template>
  <container color="#7986CB" :priority="6" headline="Contact">
    
  </container>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import Container from '@/components/Container.vue';

@Component({
  components: {
    Container
  }
})
export default class ContactContent extends Vue {
}
</script>


