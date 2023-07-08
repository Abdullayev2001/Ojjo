<template>
  <div class="blog-card" :style="{backgroundImage: `url(${image})`}">
        <h3 class="card-text" >{{ title }} </h3>
  </div>
</template>

<script>
export default {
    props:{
        image:String,
        title:String,
    }
}
</script>

<style lang="scss">
    @import '../assets/styles/components/_vars.scss';
    @import '../assets/styles/components/_mixins.scss';
    .blog-card{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 350px;
        height: 370px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-color: #cecece;
        position: relative;
        &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(180, 180, 180, 0) 0%, #333333 100%);
        }
        //media 
        @include xl{
            width: 280px;
            height: 320px;
        }
        @include lg{
            width: 240px;
            height: 280px;
        }
        @include sm{
            width: 80%;
            height: 310px;
        }
        @include xs{
            width: 85%;
            height: 270px;
        }
        cursor: pointer;
        .card-text{
            max-width: 210px;
            font-size: 21px;
            font-weight: 400;
            line-height: 30px;
            padding-bottom: 35px;
            text-align: center;
            position: relative;
            color: $white;
        }
    }
</style>