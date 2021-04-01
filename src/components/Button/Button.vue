<template lang="pug">
.button(:class="[{'button--block': block}, 'button--' + theme]")
  button.button__item(:class="['button__item--' + theme, 'button__item--' + size]") {{ text }}
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "LocalIcon",
	props: {
		text: {
      type: String,
      required: true
    },
		theme: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'md'
    },
    block: {
      type: Boolean,
      required: false
    }
	},
	computed: {
	},
});
</script>

<style scoped lang="sass">
.button
  display: inline-block
  padding: variables.$gutter
  &__item
    font-family: Avenir, Helvetica, Arial, sans-serif
    width: 100%
    border: none
    text-decoration: none
    text-transform: uppercase
    padding: variables.$gutter*2
    background: transparent
    color: white
    cursor: pointer
    text-align: center
    box-shadow: variables.$box-shadow
    border-radius: variables.$gutter
    &--primary
      background: var(--color-primary)
      &:hover
        background: var(--color-secondary)
    &--secondary
      background: var(--color-secondary)
      &:hover
        background: var(--color-primary)
    &--sm
    &--md
    &--lg
  &--block
    display: flex
  &--text
    padding: 0
    display: inline-flex
    .button
      &__item
        font-size: 1em
        color: var(--link-color)
        background-color: transparent
        box-shadow: none
        &:hover
          color: var(--link-color-hover)
</style>