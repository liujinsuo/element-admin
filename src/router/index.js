import Vue from 'vue'
import VueRouter from 'vue-router'
import ListArticle from '../views/ListArticle.vue'
import CreateArticle from '../views/CreateArticle.vue'
import EditArticle from '../views/EditArticle.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/articles/index'
  },
  {
    path: '/articles/index',
    name: 'list-article',
    component: ListArticle
  },
  {
    path: '/articles/create',
    name: 'create-article',
    component: CreateArticle
  },
  {
    path: '/articles/:id/edit',
    name: 'edit-article',
    component: EditArticle
  }
]

const router = new VueRouter({
  routes
})
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router
