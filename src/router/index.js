import { createRouter, createWebHistory } from "vue-router/auto";
const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/Login.vue"),
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("@/pages/Game.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, _from, next) => {
  if (to.fullPath === "/") {
    router.push("/login");
  }
  next();
});

export default router;
