<template lang="pug">
svg.icon(:class="['icon--' + size, {'icon--theme': theme}, {'icon--custom-color': color}, {'icon--custom-sizes': width || height}]")
  title(v-if="title") {{ title }}
  desc(v-if="description") {{ description }}
  use(:xlink:href="'#' + name")
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "LocalIcon",
	props: {
		name: {
      type: String,
      required: true
    },
		color: {
      type: String,
      required: false
    },
		theme: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    size: {
      type: String,
      default: 'md'
    },
    width: {
      type: String,
      required: false
    },
    height: {
      type: String,
      required: false
    }
	},
	computed: {
	},
});
</script>

<style scoped lang="sass">
.icon
  max-width: 100%
  max-height: 100%
  display: inline-block
  color: var(--color-primary-dark)
  &--theme
    color: var(--main-font-color)
  &--custom-color
    color: v-bind(color)
  &--sm
    width: variables.$gutter*6
    height: variables.$gutter*5
  &--md
    width: variables.$gutter*11
    height: variables.$gutter*10
  &--xl
    width: variables.$gutter*16
    height: variables.$gutter*15
  &--xxl
    width: variables.$gutter*41
    height: variables.$gutter*40
  &--custom-sizes
    width: v-bind(width)
    height: v-bind(height)
</style>