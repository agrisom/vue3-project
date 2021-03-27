<template lang="pug">
.layout.layout--base
  header.layout__header
    slot(name='header')
  aside.layout__left-side
    slot(name='left-side')
  main.layout__main
    slot(name='content')
  aside.layout__right-side
    slot(name='right-side')
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
</style>