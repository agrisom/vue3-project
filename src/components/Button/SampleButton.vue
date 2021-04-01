<template lang="pug">
.container
  h1 Button sm
  div
    Button(text="Primary" theme="primary", size="sm")
    Button(text="Secondary" theme="secondary", size="sm")
    .block
      Button(text="Block" theme="primary", size="sm", block)
    Button(text="text" theme="text", size="sm")
  h1 Button md
  div
    Button(text="Primary" theme="primary", size="md")
    Button(text="Secondary" theme="secondary", size="md")
    .block
      Button(text="Block" theme="primary", size="md", block)
    Button(text="text" theme="text", size="md")
  h1 Button lg
  div
    Button(text="Primary" theme="primary", size="lg")
    Button(text="Secondary" theme="secondary", size="lg")
    .block
      Button(text="Block" theme="primary", size="lg", block)
    Button(text="text" theme="text", size="lg")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/components/Button/Button.vue';

export default defineComponent({
  name: 'DropDownMenu',
  components: {
    Button,
  },
});
</script>

<style lang="sass" scoped>
</style>