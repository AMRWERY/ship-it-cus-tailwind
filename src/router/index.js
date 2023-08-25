import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/sign-up",
      name: "Register",
      component: () => import("../auth/Register.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../auth/Login.vue"),
    },
    {
      path: "/reset-password",
      name: "ResetPassword",
      component: () => import("../auth/ResetPassword.vue"),
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/products",
      name: "Products",
      component: () => import("../components/products/Products.vue"),
    },
    {
      path: "/products/:category",
      name: "products",
      component: () => import("../components/products/Products.vue"),
    },
    {
      path: "/product/:id",
      name: "ProductDetails",
      component: () => import("../components/products/ProductDetails.vue"),
    },
    {
      path: "/categories",
      name: "Categories",
      component: () => import("../components/Categories.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../components/profile/Profile.vue"),
    },
    {
      path: "/order-summary",
      name: "OrderSummary",
      component: () => import("../components/OrderSummary.vue"),
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: () => import("../components/checkout/Checkout.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../components/Contact.vue"),
    },
    {
      path: "/:catchAl(.*)",
      name: "Error404",
      component: () => import("../views/Error404.vue"),
    },
  ],
});

export default router;
