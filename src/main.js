import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import Scrollspy from 'vue2-scrollspy';
// import ScrollView from "vue-scrollview";
import VueScrollTo from "vue-scrollto";
import VueScrollactive from "vue-scrollactive";
import VueParallaxJs from "vue-parallax-js";
// require("vue2-animate/dist/vue2-animate.min.css");
require("animate.css");
import VuePageTransition from "vue-page-transition";

Vue.use(VuePageTransition);

Vue.use(VueParallaxJs);
// Vue.use(Scrollspy);
// Vue.use(ScrollView);
// Vue.use(VueScrollTo);
Vue.use(VueScrollactive);

// You can also pass in the default options
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: -65,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
