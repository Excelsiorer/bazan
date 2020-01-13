import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import About from "../views/About.vue";
import Portfolio from "../views/Portfolio.vue";
import Project from "../views/Project.vue";
import Contacts from "../views/Contacts.vue";
require("../assets/css/main.scss");

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "main",
        component: Main
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/portfolio",
        name: "portfolio",
        component: Portfolio
    },
    {
        path: "/portfolio/:id",
        name: "project",
        component: Project,
        props: true
    },
    {
        path: "/contacts",
        name: "contacts",
        component: Contacts
    }
];

const router = new VueRouter({
    mode: "history",
    // base: process.env.BASE_URL,
    routes
});

export default router;
