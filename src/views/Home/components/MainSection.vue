<template>
  <section class="main-section">
      <div class="content">
        <h1 class="main-title">
           Долго, дорого, богато!
        </h1>
        <Button>
          каталог изделий 
        </Button>
      </div>
      <Brands />
  </section>
</template>

<script>
import Button from '../../../layouts/Button.vue';
import Brands from './Brands.vue';
export default {
  components:{
    Button,
    Brands
  }
}
</script>

<style lang="scss">
    @import '../../../assets/styles/Pages/Home/Main-section.scss';
</style>