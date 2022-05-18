const { createRouter, createWebHistory } = VueRouter;
import { listProduct } from "../pages/product/listProduct.js";
import { register } from "../pages/auth/register.js"
import { login } from "../pages/auth/login.js"

const routes = [
  {
    path: "/",
    component: listProduct,
  },
  {
    path: "/beast-vapeshop",
    component: listProduct,
  },
  {
    path: "/uts-crud",
    component: listProduct,
  },
  {
    path: "/register",
    component: register,
  },
  {
    path: "/login",
    component: login,
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
