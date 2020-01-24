<template>
  <main class="container instalations">
    <div class="row animated fadeIn" v-if="showAnimation">
      <cMenu v-if="showMenu" @closeMenu="showMenu = false" />
      <div class="instalations__left col-4">
        <ul class="instalations__menu">
          <li
            class="instalations__menu-el animated slideInLeft fadeIn"
            :style="{animationDelay: `0.${cityNumber}s`}"
            v-for="(city, cityKey, cityNumber) in projects"
            :key="city.link"
          >
            <a
              :href="'#' + city.link"
              v-scroll-to="'#' + city.link"
              class="instalations__menu-btn"
              :class="{
                                'instalations__menu-btn--active':
                                    activeMenu == city.link
                            }"
            >{{ city.title }}</a>
            <scrollactive
              class="instalations__submenu"
              active-class="instalations__submenu-btn--active"
              tag="ul"
              :offset="250"
              :scrollOffset="50"
              :clickToScroll="true"
              @itemchanged="setActiveMenu"
            >
              <li
                class="instalations__submenu-el"
                v-for="(projectType,
                                projectTypeKey) in city.themes"
                :key="projectType.link"
              >
                <a
                  :href="'#' + city.link +'-' +projectType.link"
                  class="instalations__submenu-btn scrollactive-item"
                >{{ projectType.title }}</a>
              </li>
            </scrollactive>
          </li>
          <li class="instalations__menu-el">
            <div class="instalations__separator"></div>
            <!-- <a
              href="#video"
              class="instalations__menu-btn animated slideInLeft fadeIn"
              :style="{animationDelay: `0.${Object.keys(projects).length}s`}"
            >Video</a>-->
          </li>
          <li>
            <ul class="menu">
              <li id="menuBtn">
                <div class="menu__el" @click="showMenu = true">menu</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="col-17 offset-3 instalations__work">
        <section
          v-for="(city, cityKey, cityNumber) in projects"
          :key="city.link"
          class="instalations__section"
          :id="city.link"
        >
          <div
            class="instalations__section-theme"
            v-for="(projectType,
                        projectTypeKey,
                        projectTypeNumber) in city.themes"
            :key="projectType.link"
            :id="city.link + '-' +projectType.link"
          >
            <div class="instalations__works">
              <h2
                class="instalations__title"
                :class="{
                    'instalations__title--show':
                        activeMenu == city.link &&
                        activeSubmenu == projectType.link
                }"
              >{{ projectType.title }}</h2>
              <div class="work__separator--start"></div>
              <template v-for="(project, projectKey, projectI) in projectType.projects">
                <router-link
                  class="work col-24"
                  :to="'/portfolio/' + project.link"
                  :key="projectKey"
                >
                  <img
                    class="work_bg"
                    :src="
                        require('../assets/img/projects/' +
                            project.srcFolder +
                            '/'+ project.poster )
                    "
                  />
                  <div class="work__body">
                    <header class="instalations__header">
                      <div class="work__title">{{ project.title }}</div>
                      <p
                        class="work__description col-23"
                        v-for="(text, textI) in project.description"
                        :key="'work__description' + textI"
                        v-html="text"
                      ></p>
                    </header>

                    <footer class="work__footer">
                      <div class="work__year">{{ project.year }}</div>
                    </footer>
                  </div>
                </router-link>
                <div
                  :class="projectI+1 < Object.keys(projectType.projects).length ? 'work__separator' : 'work__separator--last'"
                  :key="'separator_' + project.link + '_' + projectI"
                ></div>
              </template>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import projects from "../projects.js";
import cMenu from "../components/cMenu.vue";
import scrollactive from "../components/cScrollactive.vue";

export default {
  name: "Portfolio",
  data: () => {
    return {
      projects: projects,
      activeMenu: "saintp",
      activeSubmenu: "performances",
      fixedPositionX: null,
      showMenu: false,
      showAnimation: false
    };
  },
  components: {
    cMenu,
    scrollactive
  },
  mounted: function() {
    this.$nextTick(function() {
      this.showAnimation = true;
    });
  },
  methods: {
    setActiveMenu(event, currentItem, lastActiveItem) {
      // // debugger;
      this.fixedPositionX = currentItem
        ? currentItem.offsetTop + currentItem.offsetHeight
        : 0;
      let hash;
      if (currentItem) {
        hash = currentItem
          ? currentItem.hash.split("-")
          : ["saintp", "performances"];
        // console.log(currentItem);
        // console.log(lastActiveItem);
        // console.log("--------------");
        this.activeMenu = hash[0].replace("#", "");
        this.activeSubmenu = hash[1];
      } else if (lastActiveItem) {
        hash = lastActiveItem.hash.split("-");
        let lastCity = hash[0].replace("#", "");
        let lastTheme = hash[1];
        let nextCity, nextTheme;
        for (var i = 0; i < Object.keys(this.projects).length; i++) {
          if (Object.keys(this.projects)[i] === lastCity) {
            nextCity = Object.keys(this.projects)[i - 1];
            nextTheme = Object.keys(
              this.projects[Object.keys(this.projects)[i - 1]].themes
            )[0];
          }
        }
        this.activeMenu = nextCity;
        this.activeSubmenu = nextTheme;
      }
    }
  }
};
</script>
