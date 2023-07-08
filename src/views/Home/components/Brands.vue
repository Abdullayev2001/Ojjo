<template>
  <div class="brands">
    <div class="container">
        <div class="brand" v-for="brand in brands" :key="brand.img">
            <img :src="brand.img" alt="brand">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            brands:[
                {
                    img:new URL('@/assets/images/logo/partner.png',import.meta.url)
                },
                {
                    img:new URL('@/assets/images/logo/partner.png',import.meta.url)
                },
                {
                    img:new URL('@/assets/images/logo/partner.png',import.meta.url)
                },
                {
                    img:new URL('@/assets/images/logo/partner.png',import.meta.url)
                },
                {
                    img:new URL('@/assets/images/logo/partner.png',import.meta.url)
                },
                {
                    img:new URL('@/assets/images/logo/partner.png',import.meta.url)
                },
            ]
        }
    },
}
</script>

<style lang="scss">
    @import '../../../assets/styles/components/_vars.scss';
    @import '../../../assets/styles/components/_mixins.scss';
    .brands{
        width: 100%;
        border-top: 1px solid $white;
        padding: 30px 0;
    
        .container{
            display: flex;

            //MEDIA
            @include md{
                flex-wrap: wrap;
                // width: 50%;
                gap: 10px;
                justify-content: center;
            }
            .brand{
                width: 190px;
                padding: 15px 0;
                border-right: 1px solid $white;
                padding: 0 15px;
                @include md{
                    border: none;

            }
                img{
                    width: 100%;
                }
            }
        }
    }
</style>