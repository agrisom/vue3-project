<template lang="pug">
.navmenu__container
  nav.navmenu
    ul.navmenu__list(v-if="links" :class="'navmenu__list--' + direction")
      li.navmenu__item(v-for="(item, ind) of links" :key="ind")
        MenuItem(:link='item.pageName', :title='item.title' :direction="direction")
          template(v-if="item.links" v-slot:content)
            li.navmenu__item(v-for="(subItem, ind) of item.links" :key="subItem + ind")
              MenuItem(:link='subItem.pageName', :title='subItem.title')
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuItem from './MenuItem.vue';
import Button from '@/components/Button/Button.vue';

export default defineComponent({
  name: 'Menu',
  components: {
    MenuItem,
    Button,
  },
  props: {
    direction: {
      type: String,
      default: 'row',
    },
    links: {
      type: Array,
      required: true,
    },
  },
  methods: {
  }
});
</script>

<style lang="sass" scoped>
.navmenu
  &__container
    display: flex
  &__list
    display: flex
    margin: 0
    padding: 0
    height: 100%
    &--column
      display: block
  &__item
    position: relative
    display: flex
    list-style: none
    text-transform: uppercase
</style>