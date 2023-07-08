<template >
    <div class="home-modal">
        <div class="modal-card" @click.stop>
            <img :src="card.img" :alt="card.title">
            <div class="content">
                <h3 class="title">{{ card.title }}</h3>
                <p class="desc">{{ card.desc }}</p>
                <button class="btn" @click="$emit('closeModal')">Закрыт</button>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    props:{
       card:Object,
    }
}
</script>
<style lang="scss">
    @import '../../../assets/styles/components/_vars.scss';
    @import '../../../assets/styles/components/_mixins.scss';
    .home-modal{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba($dark, $alpha: 0.8);
        z-index: 100;
        .modal-card{
            background: $white;
            width: 40%;
            display: flex;
            flex-direction: column;
            padding-bottom: 20px;
            @include lg{
                width: 80%;
            }
            @include md{
                width: 90%;
            }
            img{
                width: 100%;
                height: 500px;
                object-fit: cover;
                padding-bottom: 20px;
                @include md{
                    height: 400px;
                }
                @include sm{
                    height: 300px;
                }
            }
            .content{
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                .btn{
                    color: $white;
                    background: $dark;
                    padding: 15px 30px;
                    font-size: 18px;
                    border-radius: 30px;
                    margin: 20px 0;
                }
            }
           
        }
    }
</style>