import { createWebHistory, createRouter } from 'vue-router'
import BoardList from '../board/BoardList.vue'
import BoardDetail from '../board/BoardDetail.vue'
import BoardCreate from '../board/BoardCreate.vue'


const routes = [
  { path: '/', component: BoardList },
  { path: '/board/:idx', component: BoardDetail },
  { path: '/board/create', component: BoardCreate },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;