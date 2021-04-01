<template lang="pug">
LayoutBase
  template(v-slot:left-side)
    Menu(:links="links" direction="column")
  template(v-slot:header)
    Header
  template(v-slot:content)
    router-view
  template(v-slot:right-side)
    // empty slot
  template(v-slot:dialog)
    // empty slot
.svgsprites
  include ./assets/sprite-local.svg
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutBase from '@/layout/LayoutBase.vue'
import Header from '@/layout/Header.vue'
import Menu from '@/components/Menu/Menu.vue'

export default defineComponent({
  name: "App",
  components: {
    LayoutBase,
    Header,
    Menu,
  },
  data: () => ({
    links: [
      {
        title: 'home',
        pageName: 'Home',
      }, {
        title: 'about',
        pageName: 'About',
      }, {
        title: 'components',
        links: [{
          title: 'layout',
          pageName: 'SampleLayout',
        }, {
          title: 'Button',
          pageName: 'SampleButton',
        }],
      },
    ],
  }),
})
</script>

<style lang="sass">
@use '@/styles/styles'
.svgsprites
  display: none
</style>
