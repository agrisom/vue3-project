<template lang="pug">
.menuitem(:class="'menuitem--' + direction")
  .menuitem__title
    Button(v-if="$slots.content" :text="title" theme="text", size="md" @click="toogleMenu")
    router-link(v-else :to="{name: link}") {{ title }}
  .menuitem__content(v-if="$slots.content" :class="[{'menuitem__content--open': isOpen}, 'menuitem__content--' + direction]")
    slot(name="content")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/components/Button/Button.vue';

export default defineComponent({
  name: 'MenuItem',
  components: {
    Button,
  },
  props: {
    title: {
      type: String,
      default: 'Item'
    },
    link: {
      type: String,
      required: false
    },
    direction: {
      type: String,
      default: 'row',
    },
  },
  data: () => ({
    isOpen: false,
  }),
  methods: {
    toogleMenu() {
      this.isOpen = !this.isOpen;
    },
  }
});
</script>

<style lang="sass">
.menuitem
  display: flex
  &--column
    flex-direction: column
  &__title
    display: flex
    & a
      padding: variables.$gutter*4
      margin: auto
    & .button__item
      padding: variables.$gutter*4
  &__content
    display: none
    &--row
      width: max-content
      background-color: var(--bg-color-main)
      box-shadow: variables.$box-shadow
      position: absolute
      bottom: 0
      right: 0
      transform: translateY(100%)
      padding: 0 variables.$gutter*6
    &--column
      padding-left: variables.$gutter*4
      width: max-content
    &--open
      display: block
    & ul
      display: block
      li
</style>