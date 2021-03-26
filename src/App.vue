<template lang="pug">
LayoutBase
  template(v-slot:header)
    span AGRISO
  template(v-slot:content)
    router-view
  template(v-slot:aside)
    ul
      li
        router-link(:to="{name: 'Home'}") Home
      li
        router-link(:to="{name: 'About'}") About
  template(v-slot:dialog)
    p notification 1
    p notification 1
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutBase from '@/layout/LayoutBase.vue'

export default defineComponent({
  name: "App",
  components: {
    LayoutBase,
  }
})
</script>

<style lang="sass">
@use '@/styles/styles'
</style>
