import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home";
import Playground from "./pages/Playground";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/playground/:roomId",
    component: Playground,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;