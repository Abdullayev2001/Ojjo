<template>
  <div class="siteTitle">
    <h3 class="subtitle">{{ sub }}</h3>
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
    props:{
        sub:String,
        title:String
    }
}
</script>

<style lang="scss">
@import '../assets/styles/components/_vars.scss';
@import '../assets/styles/components/_mixins.scss';
    .siteTitle{
        text-align: center;
        z-index: 999;
        position: relative;
        .subTitle{
            font-size: 21px;
            font-weight: 400;
            margin-bottom: 15px;
            @include md{
                font-size: 16px;
             }
        }
        .title{
            font-family: 'Noto';
            font-size: 30px;
            font-weight: 700;
             @include md{
                font-size: 23px;
             }
        }
    }
</style>