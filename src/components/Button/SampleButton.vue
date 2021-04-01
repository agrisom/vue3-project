<template lang="pug">
h1 Button Sample
Button(text="Button 1" theme="primary", size="md")
.block
  Button(text="Button 1" theme="primary", size="md", block)
Button(text="Link 1" theme="text", size="md")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/components/Button/Button.vue';

export default defineComponent({
  name: 'DropDownMenu',
  components: {
    Button,
  },
  props: {

  },
  data: () => ({
  }),
  methods: {
  }
});
</script>

<style lang="sass" scoped>
</style>