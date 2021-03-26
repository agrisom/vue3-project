<template lang="pug">
nav.mainnav
  .mainnav__logo
    router-link(:to="{name: 'Home'}")
      LocalIcon(name="logo",
        theme="dark",
        title="agriso",
        size="xl"
        description="Logo agriso")
  ul.mainnav__list
    li.mainnav__item
      router-link.mainnav__link(:to="{name: 'Home'}") Home
    li.mainnav__item
      router-link.mainnav__link(:to="{name: 'About'}") About
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LocalIcon from '@/components/Icon/LocalIcon.vue';

export default defineComponent({
  name: "SideNav",
  components: {
    LocalIcon,
  }
})
</script>

<style lang="sass">
.mainnav
  &__logo
    padding: utils.$gutter*3
  &__list
    display: block
    margin: 0
    padding: 0
    list-style: none
  &__item
    display: block
    margin: 0
    padding: 0
  &__link
    display: block
    padding: utils.$gutter*5
</style>