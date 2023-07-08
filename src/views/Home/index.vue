<template >
        <main-section />
        <Event />
        <Info />
        <HomeBlog />
  </template>

  <script>
    import MainSection from './components/MainSection.vue'
    import Event from './components/Event.vue';
    import Info from './components/Info.vue';
    import HomeBlog from './components/HomeBlog.vue';
    export default {
      components:{
        MainSection,
        Event,
        Info,
        HomeBlog,
      }
    }
</script>