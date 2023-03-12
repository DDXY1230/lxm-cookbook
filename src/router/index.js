import {createRouter,createWebHistory} from "vue-router";
import Cookbook from "@/views/cookbook/Cookbook.vue";
const routes = [{
    path: "/",
    redirect: "/cookbook",
  },
  {
    path: "/cookbook",
    meta: {
      title: '菜谱'
    },
    component: Cookbook,
  },
  {
    path: "/category",
    meta: {
      title: '分类'
    },
    component: () => import("@/views/category/Category.vue"),
  },
  {
    path: "/more",
    meta: {
      title: '更多'
    },
    component: () => import("@/views/more/More.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router