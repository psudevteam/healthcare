const { createRouter, createWebHistory } = VueRouter;
import { listProduct } from "../pages/product/listProduct.js";

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
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
