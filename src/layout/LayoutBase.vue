<template lang="pug">
.layout.layout--base
  aside.layout__aside
    slot(name='aside')
  main.layout__main
    header.layout__header
      slot(name='header')
    .layout__content
      slot(name='content')
  .modal.layout__dialog
    slot(name='dialog')
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "LayoutBase"
})
</script>

<style lang="sass">
.layout__main
  //@include utils.light-dark(--courses-background-color, red, #{colors.$color-secondary})
  background-color: var(--bg-color-main)
</style>