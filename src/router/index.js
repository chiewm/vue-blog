import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Achives from '@/components/Achives'
import Tags from '@/components/Tags'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/achives',
      name: 'Achives',
      component: Achives
    },
    {
      path: '/tags',
      name: 'Tags',
      component: Tags
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    },
  ],

})
