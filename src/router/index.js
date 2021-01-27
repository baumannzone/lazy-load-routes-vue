import { createRouter, createWebHashHistory } from "vue-router";

const routeOptions = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/login", name: "Login" }
];

const routes = routeOptions.map(route => {
  return {
    ...route,
    component: () =>
      import(/* webpackChunkName: "[request]" */ `@/views/${route.name}.vue`)
  };
});

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
