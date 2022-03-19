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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contacto",
    name: "contacto",
    alias: ["/contac*"],
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactoView.vue"),
  },
  {
    path: "/post",
    name: "post",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PostView.vue"),
    children: [
      {
        path: "1",
        name: "post1",
        alias: "*",
        component: () => import("../views/ArticuloView.vue"),
      },
      {
        path: "2",
        name: "post2",
        component: () => import("../views/JoshuasView.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "ErrorView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ErrorView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
