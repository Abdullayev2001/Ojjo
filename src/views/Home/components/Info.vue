<template>
    <section class="info">
        <div class="container">
            <Title :sub="subTitle" :title="title"/>
        </div>
        <p class="text">
            {{ text }}
        </p>
        <Button :isLight="true">{{ btn_text }}</Button>
    </section>
</template>

<script>
import Title from '@/layouts/Title.vue'
import Button from '@/layouts/Button.vue';
export default {
components:{
    Title,
    Button
},
data() {
    return {
        subTitle:'Не знаете, что выбрать?',
        title:'Посетите наши салоны в Москве',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.',
        btn_text:'наши салоны',
    }
},
}
</script>

<style lang="scss">
    @import '../../../assets/styles/components/_vars.scss';
    @import '../../../assets/styles/components/_mixins.scss';
    .info{
        background: url('../../..//assets/images/layouts/sec-bg.jpg');
        padding: 100px 0;
        color: $white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @include  md{
        padding: 40px 10px;
        }
        p{
            max-width: 730px;
            margin: 40px auto 60px;
            font-size: 18px;
            font-weight: 400;
            line-height: 25px;
        }
    }

</style>