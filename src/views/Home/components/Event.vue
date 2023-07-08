<template>
    <section class="event">
        <div class="container">
            <Title :sub="subTitle" :title="title"/>
            <div class="btns-wrapper">
                <button 
                class="btn "
                 v-for="(item,idx) in collection" 
                 :key="item.id"
                 :class="{ active: activeBtn === idx }"
                 @click="activeBtn = idx"
                 >
                     {{ item.ctg_name.text }}
                </button>
            </div>
            <div 
            class="cards-wrapper" >
                <div
                 class="card"
                 v-for="card in collection[activeBtn].data"
                 :key="card.productId"
                 @click="isModal = card"
                >
                    <img :src="card.img" :alt="card.title">
                    <h3 class="title">{{ card.title }}</h3>
                </div>
            </div>
        </div>
    </section>
    <HomeModal 
    @click="isModal= null"
    v-if="isModal" 
    :card="isModal"
    @closeModal="isModal = null"

    />
</template>

<script>
import Title from '../../../layouts/Title.vue';
import Collection from '../../../collection';
import HomeModal from './HomeModal.vue';
export default {
components:{
    Title,
    HomeModal,
},
data() {
    return {
        subTitle:'К мероприятиям',
        title:'Настоящая красота здесь!',
        collection:Collection,
        activeBtn:0,
        isModal:null,
    }
},
}
</script>

<style lang="scss">
    @import '../../../assets/styles/Pages/Home/Event-section.scss';
</style>