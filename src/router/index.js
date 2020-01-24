import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Menu from "../views/Menu.vue";
import About from "../views/About.vue";
import Portfolio from "../views/Portfolio.vue";
import Project from "../views/Project.vue";
import Contacts from "../views/Contacts.vue";
import allProjects from "../projects.js";
require("../assets/css/main.scss");

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "main",
        component: Main,
        meta: { title: 'Vera Nikolaeva - Main Page' }
    },
    {
        path: "/about",
        name: "about",
        component: About,
        meta: { title: 'Vera Nikolaeva - About me' }
    },
    {
        path: "/portfolio",
        name: "portfolio",
        component: Portfolio,
        meta: { title: 'Vera Nikolaeva - Portfolio' }
    },
    {
        path: "/portfolio/:id",
        name: "project",
        component: Project,
        props: true,
        // meta: { title: this.params.id }
    },
    {
        path: "/contacts",
        name: "contacts",
        component: Contacts,
        meta: { title: 'Vera Nikolaeva - Contacts' }
    }
];

const router = new VueRouter({
    mode: "history",
    // base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    // debugger;
    if (to.name == "project") {
        let projectList = {};
        let position = 0;

        for (let key in allProjects) {
            for (let key2 in allProjects[key]["themes"]) {
                for (let key3 in allProjects[key]["themes"][key2]["projects"]) {
                    let curObject = allProjects[key]["themes"][key2]["projects"][key3];
                    projectList[curObject.link] = curObject;
                    projectList[curObject.link]["position"] = position;
                    position++;
                }
            }
        }
        document.title = 'Vera Nikolaeva - ' + projectList[to.params.id].title
    }
    else {
        document.title = to.meta.title
    }
    next()
})

export default router;
