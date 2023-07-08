<template>
    <div  :class="['search-bar',{activeSearch:searchBarOpen}]">
        <div class="block">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search...">
        </div>
        <div class="closeSearch" @click="$emit('closeSearch')">
            <i class="fas fa-times"></i>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        searchBarOpen:{
            type:Boolean,
            required:true
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/styles/components/_vars.scss';
    @import '../assets/styles/components/_mixins.scss';
    .search-bar{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba($dark,0.9);
        z-index: 99999;
        transition: 0.5s;
        transform: translateY(-100px);
        &.activeSearch{
        transform: translateY(0px);
        }
        .block{
            width: 100%;
            max-width: 400px;
            background: $white;
            padding: 10px 20px;
            border-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            i{
                font-size: 20px;
                color: $dark;
            }
            input{
                width: 100%;
                border: none;
                background: none;
                padding-left: 15px;
                font-size: 20px;
            }
        }
        .closeSearch{
            i{
                font-size: 25px;
                color: rgba($white,0.7);
                margin-left: 10px;
                &:hover{
                    color: $white;
                }
            }
        }
    }
</style>