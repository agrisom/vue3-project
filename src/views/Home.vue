<template lang="pug">
.container.home
  img(alt="Vue logo" src="../assets/logo.png")
  p
    Icon(type="mdi" :path="path")
    Icon(type="mdi" :path="path" color="red")
  HelloWorld(msg="Welcome to Your Vue.js + TypeScript App")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { mdiCheckCircle  } from '@mdi/js';
import Icon from '@/components/Icon/Icon.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    Icon
  },
  data() {
    return { 
      path: mdiCheckCircle  
    }
  }
});
</script>

<style lang="sass" scoped>
.home
  text-align: center
</style>