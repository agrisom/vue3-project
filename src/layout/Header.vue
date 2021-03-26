<template lang="pug">
.header
  .header__actions
    .themeswitch
      //Icon(type="mdi" :path="pathLight")
      Switch(@toggle="changeTheme" :value="darkTheme")
      //Icon(type="mdi" :path="pathDark")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Switch from '@/components/Switch/Switch.vue';

export default defineComponent({
  name: "Header",
  components: {
    Switch,
  },
  data: () => ({
    darkTheme: false,
  }),
  created() {
    this.darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(this.darkTheme);
  },
  methods: {
    changeTheme() {
      this.darkTheme = !this.darkTheme;
      if(this.darkTheme) {
        document.querySelector('html')?.classList.add('dark-theme');
        document.querySelector('html')?.classList.remove('light-theme');
      } else {
        document.querySelector('html')?.classList.add('light-theme');
        document.querySelector('html')?.classList.remove('dark-theme');
      }
    }
  },
})
</script>

<style lang="sass">
.header
  text-align: right
  &__actions
    &.themeswitch
      padding-top: 15px
      padding-right: 15px
</style>