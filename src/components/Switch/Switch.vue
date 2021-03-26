<template lang="pug">
label.switch
  input(type="checkbox" id="toggle" v-model="switch" @change="$emit('toggle')")
  span.slider.round
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Switch",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    switch: false
  }),
  created() {
    this.switch = this.value
  },
  emits: ['toggle'],
  methods: {
  }
})
</script>

<style lang="sass">

.switch
  position: relative
  display: inline-block
  width: 36px
  height: 18px
  margin: 5px

.switch input
  opacity: 0
  width: 0
  height: 0

.slider
  position: absolute
  cursor: pointer
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: colors.$color-grey-dark-1
  transition: .4s

.slider:before
  position: absolute
  content: ""
  height: 22px
  width: 22px
  left: -1px
  bottom: -2px
  background-color: colors.$color-grey-light-3
  transition: .4s

input:checked + .slider
  background-color: var(--color-primary)

input:focus + .slider
  outline: none

input:checked + .slider:before
  transform: translateX(15px)

.slider.round
  border-radius: 22px

.slider.round:before
  border-radius: 50%
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.5)
</style>