<template >
    <search-bar :searchBarOpen="searchBarOpen" @closeSearch="closeSearch"/>
  <Navbar @searchBar="searchBar"/>
  <router-view />
</template>
<script>
import Navbar from './layouts/Navbar.vue';
import SearchBar from './layouts/SearchBar.vue';
export default {
  components:{
    Navbar,
    SearchBar,
  },
  data() {
    return {
      searchBarOpen:false,
    }
  },
  methods: {
    searchBar(){
      this.searchBarOpen = true
    },
    closeSearch(){
      this.searchBarOpen = false
    }
  },
}
</script>
<style lang="scss">
    @import './assets/styles/main.scss';

</style>