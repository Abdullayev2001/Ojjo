import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home/index.vue'



  
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
        return { top: 0, left: 0 }
    } ,
    routes: [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import ('../views/Blog/index.vue')
    },
    {
        path: '/post/:postId',
        name: 'Post',
        component: () => import ('../views/Blog/components/BlogPost.vue')
    },
  
  ]
})

export default router