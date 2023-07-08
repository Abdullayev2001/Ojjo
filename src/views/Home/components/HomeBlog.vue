<template>
  <section class="home-blog">
    <div class="container">
        <Title :sub="subTitle" :title="title"/>
        <div class="wrapper">
              <BlogCard 
              v-for="post in CutBlogArray"
              :key="post.id" 
               :title="post.title"
                :image="post.img"
                @click="$router.push({name:'Post',params:{postId:post.id}})"
               />
        </div>
        <Button @click="$router.push({name:'Blog'})">    {{ btn_text }} </Button>
    </div>
  </section>
</template>

<script>
import Title from '@/layouts/Title.vue'
import Button from '@/layouts/Button.vue';
import BlogCard from '@/layouts/BlogCard.vue';
import BlogPosts from '@/blogPosts.js'
export default {
    components:{
        Title,
        Button,
        BlogCard,
    },
    data() {
        return {
            subTitle:'Полезные статьи',
            title:'Лучшие советы по подбору дорогих подарков',
            btn_text:'читать наш блог',
            blog_posts: BlogPosts,
        }
    },
    computed:{
      getRandomArray(){
        const max = BlogPosts.length-3
        const min = 0
        return Math.floor(Math.random()*max)
      },
      CutBlogArray(){
       return this.blog_posts.slice(this.getRandomArray,this.getRandomArray+3)
      }
    }
}
</script>

<style lang="scss">

  @import '../../../assets/styles/components/_vars.scss';
  @import '../../../assets/styles/components/_mixins.scss';
  .home-blog{
    padding: 120px 0;
    text-align: center;
    //media 
    @include md{
      padding: 50px 10px;
    }
    .wrapper{
      display: flex;
      flex-wrap: wrap;
      padding: 60px 0;
      justify-content: space-between;
      //media 
      @include lg{
        padding: 30px 0;
        gap: 20px;
        align-items: center;
        justify-content: center;
      } 
    }
  }
</style>