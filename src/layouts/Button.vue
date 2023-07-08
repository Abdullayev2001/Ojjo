<template>
  <button class="siteBtn" :class="{light:isLight}">
    <slot />
  </button>
</template>

<script>
export default {
  props:{
    isLight:String
  }
}
</script>

<style lang="scss">
 @import '../assets/styles/components/_vars.scss';
 @import '../assets/styles/components/_mixins.scss';
    .siteBtn{
        font-size: 18px;
        padding: 15px 35px;
        background: $dark;  
        color: $white;
        //MEDIA
        @include md{
            font-size: 14px;
            padding: 10px 26px;
        }
        &.light{
            color: $dark;
            background: $white;
        }
    }
</style>