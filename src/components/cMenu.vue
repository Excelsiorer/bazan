<template>
  <div class="menuOverlay container animated fadeIn">
    <div class="menuOverlay__bg"></div>
    <div class="row">
      <ul class="col-20 big-menu">
        <li class="menu__li">
          <router-link
            to="/portfolio"
            class="menu__el"
            :class="{'menu__el--active': activeMenu == 'portfolio' || activeMenu == 'project'}"
          >portfolio</router-link>
          <div class="menu__close" @click="closeMenu()"></div>
        </li>
        <li class="menu__li">
          <router-link
            to="/about"
            class="menu__el"
            :class="{'menu__el--active': activeMenu == 'about'}"
          >about me</router-link>
        </li>
        <li class>
          <router-link
            to="/contacts"
            class="menu__el"
            :class="{'menu__el--active': activeMenu == 'contacts'}"
          >contacts</router-link>
        </li>
        <li class="menu__li">
          <router-link
            to="/"
            class="menu__el"
            :class="{'menu__el--active': activeMenu == 'main'}"
          >main page</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import cMenu from "../components/cMenu.vue";

export default {
  name: "Menu",
  components: {
    cMenu
  },
  data: () => {
    return {
      activeMenu: null
    };
  },
  mounted: function() {
    document.getElementsByTagName("html")[0].classList.add("block-scroll");
    this.activeMenu = this.$route.name;
  },
  // beforeDestroy: function() {

  // },
  destroyed: function() {
    document.getElementsByTagName("html")[0].classList.remove("block-scroll");
  },
  methods: {
    closeMenu() {
      let menuOverlay = document.getElementsByClassName("menuOverlay")[0];
      menuOverlay.classList.remove("fadeIn");
      menuOverlay.classList.add("fadeOut");
      setTimeout(() => {
        this.$emit("closeMenu");
      }, 500);
    }
  }
};
</script>
<style>
</style>