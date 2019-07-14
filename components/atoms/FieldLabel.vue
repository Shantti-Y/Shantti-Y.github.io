<template>
<label class="field-label" :for="field">{{ field }}</label>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';

import ClassName from '@/components/atoms/ClassName';

@Component
export default class FieldLabel extends Mixins(ClassName){
  @Prop({ type: String, required: true }) readonly field;
}
</script>

<style lang="scss" scoped>
.field-label {
  
}
</style>

