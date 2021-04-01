<template lang="pug">
.message(:class="[{'message--ok': isIntersecting}]") {{ isIntersecting }}
.box
.box
.box.target
.box
.box
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "InstersectionSample",
  data: () => ({
    observer: null,
    options: {
      threshold: 0,
      rootMargin: '-250px',
    },
    isIntersecting: false,
  }),
  mounted() {
    this.observer = new IntersectionObserver(this.onElementObserved, this.options);
    this.observer.observe(document.querySelector(".target"));
  },
  methods: {
    onElementObserved(entries) {
      entries.forEach(entry => {
        this.isIntersecting = entry.isIntersecting;
      });
    },
  }
})
</script>

<style lang="sass" scoped>
.message
  position: sticky
  top: 0
  background-color: red
  padding: 1rem
  color: white
  text-align: center
  &--ok
    background-color: green
.box
  width: 300px
  height: 300px
  background-color: orange
  & + &
    margin-top: 50px
.target
  background-color: blue
</style>