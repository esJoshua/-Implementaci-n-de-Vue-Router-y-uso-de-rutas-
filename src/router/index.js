import Vue from "vue";
import VueRouter from "vue-router";
import PortadaView from "../views/PortadaView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: PortadaView,
    alias: ["/inici*", "/hom*"],
  },
  {
    path: "/sobremi",
    name: "sobremi",
    alias: ["/abou*"],
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/contacto",
    name: "contacto",
    alias: ["/contac*"],
    component: () => import("../views/ContactoView.vue"),
  },
    {
    path: "/post",
    name: "post",
    component: () => import("../views/PostView.vue"),
    children: [
      {
        path: ":id",
        name: "post1",
        alias: "*",
        component: () => import("../views/ArticuloView.vue"),
      },
    ],
  },
  {
    path: "*",
    beforeEnter: (to, from, next) => next("/404"),
  },
  {
    path: "/404",
    name: "ErrorView",
    component: () => import("../views/ErrorView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
