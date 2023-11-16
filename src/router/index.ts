import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/hoc",
      name: "hoc",
      component: () => import("@/views/HOCView.vue"),
    },
    {
      path: "/options",
      name: "options",
      component: () => import("@/views/OptionsView.vue"),
    },
  ],
});

export default router;
