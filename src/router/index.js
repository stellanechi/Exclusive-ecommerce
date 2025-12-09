import Homepage from "@/pages/home/Homepage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: "/", component: Homepage }],
  //  { path: "/about", component: AboutView },
});

export default router;
