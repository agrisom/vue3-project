<template lang="pug">
.header
  .header__logo
    router-link.header__icon(:to="{name: 'Home'}")
      LocalIcon(name="logo",
        :theme="true",
        title="agriso",
        size="xl"
        description="Logo agriso")
    .header__text
      h1 Albert Griso
  .header__nav
    Menu(:links="links" direction="row")
  .header__actions
    .themeswitch
      //Icon(type="mdi" :path="pathLight")
      Switch(@toggle="changeTheme" :value="darkTheme")
      //Icon(type="mdi" :path="pathDark")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Switch from '@/components/Switch/Switch.vue';
import LocalIcon from '@/components/Icon/LocalIcon.vue';
import Menu from '@/components/Menu/Menu.vue';

export default defineComponent({
  name: "Header",
  components: {
    Switch,
    LocalIcon,
    Menu,
  },
  data: () => ({
    darkTheme: false,
    links: [
      {
        title: 'home',
        pageName: 'Home',
      }, {
        title: 'about',
        pageName: 'About',
      }, {
        title: 'components',
        links: [{
          title: 'layout',
          pageName: 'SampleLayout',
        }, {
          title: 'Button',
          pageName: 'SampleButton',
        }],
      },
    ],
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
    },
  },
})
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap')
.header
  display: flex
  &__logo
    display: flex
    flex-grow: 1
    padding: variables.$gutter
  &__text
    margin: auto variables.$gutter*4
    font-family: 'Righteous', cursive
  &__nav
    display: flex
  &__actions
    margin: auto
    &.themeswitch
</style>