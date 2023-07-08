<template>
    <section class="blogs">
      <div class="block">
          <Title :title="title" :sub="subTitle"/>
      </div>
      <div class="wrapper container">
          <BlogCard 
           v-for="post in posts"
           :key="post.id"
           :image="post.img"
           :title="post.title"
           @click="$router.push({name:'Post',params:{postId:post.id}})"
          />
      </div>
    </section>
</template>

<script>
import Title from '../../layouts/Title.vue';
import BlogCard from '../../layouts/BlogCard.vue';
import BlogPosts from '@/blogPosts.js'
export default {
  components:{
    Title,
    BlogCard,
  },
    data() {
      return {
        title:'Handcrafted with love',
        subTitle: 'Jazz up your ring stack',
        posts:BlogPosts,
      }
    },
}
</script>
<style lang="scss">
@import '../../assets/styles/components/_vars.scss';
@import '../../assets/styles/components/_mixins.scss';
    .blogs{
      .block{
        background: url('https://www.darjewellery.com/slider/web4.jpg');
        padding: 200px 0;
        color: $white;
        position: relative;
          &::before{
            content: '';
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: rgba($dark,0.5);
            position: absolute;

          }
      }
      .wrapper{
        display: flex;
        justify-content: center;
        gap: 60px 30px;
        align-items: center;
        flex-wrap: wrap;
        margin: 100px auto;
      }
    }
</style>