<template>
  <header class="header">
    <div class="container">
        <nav class="navbar">
            <ul class="menu" v-if="!isMobile">
                <li class="menu-item"
                 v-for="item in menuArray" 
                :key="item.text"
                >
                    <a class="link" :href="item.link">{{ item.text }}</a>
                </li>
            </ul>

            <div :class="['logo',{darkLogo: isOpen}]">
                <img class="logo-image" :src="logoImage" alt="">
            </div>
            <div class="burger-box"  v-if="isMobile">
                <div class="burger" @click="isOpen = !isOpen">
                    <i class="fas fa-bars" v-if="!isOpen"></i>
                    <i class="fas fa-times" v-if="isOpen"></i>
                </div>

                <div class="burger-auth" >
                    <div class="burger-auth">
                        <i class="fas fa-sign-in"></i>
                    </div>
                </div>

            </div>
            <div class="actions" v-if="!isMobile">
                <div class="search" @click="$emit('searchBar')">
                    <i class="fas fa-search"></i>
                    <span>
                        Поиск
                    </span>
                </div>

                <div class="auth">
                    <span>Вход/Регистрация</span>
                </div>
                <div class="act">
                    <i class="fas fa-user"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </div>

            <div :class="['burger-menu',{active:isOpen}]">
                <ul class="mobile-menu">
                    <li
                     class="item"
                     v-for="item in menuArray"
                     :key="item.text"
                    >
               <a :href="item.link"> {{ item.text }}</a>
                </li>
                </ul>
                <div class="block">
                    <div class="search-block">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Search">
                    </div>
                    <div class="box">
                        <i class="fas fa-user"></i>
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  </header>
</template>

<script>
export default {
    data() {
        return {
            isMobile:false,
            isOpen:false,
            logoImage: new URL('../assets/images/logo/logo.png', import.meta.url),
            menuArray:[
                {
                text:'Контрагентам',
                link: '#',
                },
                {
                text:'Дизайнерам',
                link: '#',
                },
                {
                text:'Вакансии',
                link: '#',
                },
        ]
        }
    },

    methods:{
        checkScreenWidth(){
            const winWidth = window.innerWidth
            if(winWidth < 1150){
                this.isMobile = true
                return
            }
            this.isMobile = false
            this.isOpen = false
        }
    },
    mounted(){
        this.checkScreenWidth()
        window.addEventListener('resize', this.checkScreenWidth)
    }
}
</script>

<style lang="scss">
    @import '../assets/styles/layouts_styles/navbar.scss';
</style>