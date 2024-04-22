import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Signup from "../views/Signup.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";

const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/signup",
        name: "signup",
        component: Signup,
    },
    {
        path: "/forgot-password",
        name: "forgot-password",
        component: ForgotPassword,
    },
    {
        path: "/reset-password/token",
        name: "reset-password",
        component: ResetPassword,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
