const { createRouter, createWebHistory } = VueRouter;
import { landing } from "../pages/landing/index.js";
import { register } from "../pages/auth/register.js"
import { login } from "../pages/auth/login.js"
import { listProduct } from "../pages/product/listProduct.js"

const routes = [
  {
    path: "/",
    component: landing,
  },
  {
    path: "/register",
    component: register,
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/listProduct",
    component: listProduct,
  }
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
