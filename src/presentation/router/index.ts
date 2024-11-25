import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import InfoPage from "../views/InfoPage.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: HomePage },
  { path: "/info", component: InfoPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
