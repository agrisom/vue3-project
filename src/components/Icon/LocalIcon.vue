<template lang="pug">
svg.icon(:class="['icon--' + size, {'icon--black': theme}, {'icon--custom-color': color}, {'icon--custom-sizes': width || height}]")
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
      type: String,
      required: false
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
  &--black
    //@include light-dark(--icon-color-black, var(--color-black), var(--color-primary-dark))
    color: colors.$color-black
  &--custom-color
    color: v-bind(color)
  &--sm
    width: utils.$gutter*6
    height: utils.$gutter*5
  &--md
    width: utils.$gutter*11
    height: utils.$gutter*10
  &--xl
    width: utils.$gutter*16
    height: utils.$gutter*15
  &--xxl
    width: utils.$gutter*41
    height: utils.$gutter*40
  &--custom-sizes
    width: v-bind(width)
    height: v-bind(height)
</style>