import { createRouter, createWebHistory } from "vue-router";
import HomeView from "/views/HomeView.vue";
import ExampleApiCallView from "/views/ExampleApiCallView.vue";
import LoginView from "/views/LoginView.vue";
import NotFoundView from "/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/exampleapicall",
      name: "exampleapicall",
      component: ExampleApiCallView,
    },
    {
      path: "/examplebootstrap",
      name: "examplebootstrap",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("/views/ExampleBootstrap.vue"),
    },
    // default redirect to home page
    { path: "/:pathMatch(.*)*", name: "notfound", component: NotFoundView },
  ],
});

export default router;
