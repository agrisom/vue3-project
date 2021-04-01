<template lang="pug">
.message(:class="[{'message--ok': isIntersecting}]") {{ isIntersecting }}
.box
.box
.box.target
.box
.box
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from 'vue';

export default defineComponent({
  name: "InstersectionSample",
  setup() {
    const isIntersecting: Ref<boolean> = ref(false);

    const options = {
      threshold: 0,
      rootMargin: '-250px',
    };

    function onElementObserved(entries: IntersectionObserverEntry[]): void {
      entries.forEach(entry => {
        isIntersecting.value = entry.isIntersecting;
      });
    }
    
    const observer = new IntersectionObserver(onElementObserved, options);
    
    onMounted(() => {
      const target = document.querySelector(".target")
      if(target) {
        console.log(target);
        observer.observe(target);
      }
    });

    return {
      isIntersecting,
    };
  },
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