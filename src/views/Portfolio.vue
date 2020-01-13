<template>
  <main class="container instalations">
    <div class="row">
      <div class="instalations__left col-4">
        <ul class="instalations__menu">
          <li
            class="instalations__menu-el"
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
            >{{ cityKey }}</a>
            <scrollactive
              class="instalations__submenu"
              active-class="instalations__submenu-btn--active"
              tag="ul"
              :offset="scrollSpyOfsset"
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
                >{{ projectTypeKey }}</a>
              </li>
            </scrollactive>
          </li>
          <li class="instalations__menu-el">
            <div class="instalations__separator"></div>
            <a href="#video" class="instalations__menu-btn">Video</a>
          </li>
          <li>
            <ul class="menu">
              <li>
                <router-link to="/portfolio" class="menu__el menu__el--active">portfolio</router-link>
              </li>
              <li>
                <router-link to="/" class="menu__el">main page</router-link>
              </li>
              <li>
                <router-link to="/about " class="menu__el">about me</router-link>
              </li>
              <li>
                <router-link to="/contacts " class="menu__el">contacts</router-link>
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
            <div class="work__section-separator"></div>
            <div class="instalations__works">
              <h2
                class="instalations__title"
                :class="{
                    'instalations__title--show':
                        activeMenu == city.link &&
                        activeSubmenu == projectType.link
                }"
              >{{ projectTypeKey }}</h2>
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
                            '/poster.png')
                    "
                  />
                  <div class="work__body">
                    <header class="instalations__header">
                      <div class="work__title">{{ project.title }}</div>
                      <p class="work__description col-12">{{ project.description }}</p>
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
export default {
  name: "Portfolio",
  data: () => {
    return {
      projects: projects,
      activeMenu: "saintp",
      activeSubmenu: "performances",
      scrollSpyOfsset: 300,
      fixedPositionX: null
    };
  },

  methods: {
    setActiveMenu(event, currentItem, lastActiveItem) {
      // // debugger;
      this.fixedPositionX = currentItem
        ? currentItem.offsetTop + currentItem.offsetHeight
        : 0;
      let hash = currentItem
        ? currentItem.hash.split("-")
        : ["saintp", "performances"];
      console.log(currentItem);
      console.log(lastActiveItem);
      console.log("--------------");
      this.activeMenu = hash[0].replace("#", "");
      this.activeSubmenu = hash[1];
    }
  }
};
</script>
