<template>
  <main class="container instalations">
    <div class="row">
      <div class="instalations__left col-4">
        <ul class="instalations__menu">
          <li
            class="instalations__menu-el"
            v-for="(city, cityKey, cityNumber) in projects"
            :key="cityKey"
          >
            <a
              :href="'#menu__project-' + cityNumber"
              v-scroll-to="'#menu__project-' + cityNumber"
              class="instalations__menu-btn"
              :class="{
                                'instalations__menu-btn--active':
                                    activeMenu == cityNumber
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
                                projectTypeKey,
                                projectTypeNumber) in city"
                :key="projectTypeKey"
              >
                <a
                  :href="
                                        '#menu__project-' +
                                            cityNumber +
                                            '-' +
                                            projectTypeNumber
                                    "
                  class="instalations__submenu-btn scrollactive-item"
                >{{ projectTypeKey }}</a>
              </li>
            </scrollactive>
          </li>
          <li class="instalations__menu-el">
            <div class="instalations__separator"></div>
            <a href="#" class="instalations__menu-btn">Video</a>
          </li>
          <li>
            <ul class="menu">
              <li>
                <div class="menu__el">portfolio</div>
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
          :key="cityKey"
          class="instalations__section"
          :id="'menu__project-' + cityNumber"
        >
          <div
            class="instalations__section-theme"
            v-for="(projectType,
                        projectTypeKey,
                        projectTypeNumber) in city"
            :key="projectTypeKey"
            :id="
                            'menu__project-' +
                                cityNumber +
                                '-' +
                                projectTypeNumber
                        "
          >
            <div class="work__section-separator"></div>
            <div class="instalations__works">
              <h2
                class="instalations__title"
                :class="{
                    'instalations__title--show':
                        activeMenu == cityNumber &&
                        activeSubmenu == projectTypeNumber
                }"
              >{{ projectTypeKey }}</h2>
              <template v-for="(project, projectKey) in projectType">
                <router-link
                  class="work col-24"
                  :to="'/portfolio/' + project.link"
                  :key="projectKey"
                >
                  <img
                    class="work_bg"
                    :src="
                                            require('../assets/img/projects/' +
                                                project.link +
                                                '/poster.png')
                                        "
                  />
                  <div class="work__body">
                    <header class="instalations__header">
                      <div class="work__title">{{ project.title }}</div>
                      <p class="work__description col-12">{{ project.description }}</p>
                    </header>

                    <footer class="work__footer">
                      <div class="work__language">{{ project.language }}</div>
                      <div class="work__year">{{ project.year }}</div>
                    </footer>
                  </div>
                </router-link>
                <div class="work__separator" :key="'separator_' + projectKey"></div>
              </template>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Portfolio",
  data: () => {
    return {
      projects: {
        "Saint.P": {
          performances: {
            "Little Prince": {
              title: "Little Prince",
              link: "little_prince",
              description:
                "This performance is an attempt to show the story wrote by Antoine Exupery. Story of the relationship ,experiences of pain, disappointments and most importantly, love.",
              language: "French",
              year: 2013
            },
            "Little Prince2": {
              title: "Little Prince",
              link: "little_prince",
              description:
                "This performance is an attempt to show the story wrote by Antoine Exupery. Story of the relationship ,experiences of pain, disappointments and most importantly, love.",
              language: "French",
              year: 2013
            }
          },
          videoprojects: {
            "Little Prince": {
              title: "Little Prince",
              link: "little_prince",
              description:
                "This performance is an attempt to show the story wrote by Antoine Exupery. Story of the relationship ,experiences of pain, disappointments and most importantly, love.",
              language: "French",
              year: 2013
            }
          },
          paintings: {
            "Little Prince": {
              title: "Little Prince",
              link: "little_prince",
              description:
                "This performance is an attempt to show the story wrote by Antoine Exupery. Story of the relationship ,experiences of pain, disappointments and most importantly, love.",
              language: "French",
              year: 2013
            }
          },
          photos: {
            "Little Prince": {
              title: "Little Prince",
              link: "little_prince",
              description:
                "This performance is an attempt to show the story wrote by Antoine Exupery. Story of the relationship ,experiences of pain, disappointments and most importantly, love.",
              language: "French",
              year: 2013
            }
          }
        },
        Moscow: {
          "theater directing": {
            "Little Prince": {
              title: "Little Prince",
              link: "little_prince",
              description:
                "This performance is an attempt to show the story wrote by Antoine Exupery. Story of the relationship ,experiences of pain, disappointments and most importantly, love.",
              language: "French",
              year: 2013
            }
          },
          "movie production": {
            "Little Prince": {
              title: "Little Prince",
              link: "little_prince",
              description:
                "This performance is an attempt to show the story wrote by Antoine Exupery. Story of the relationship ,experiences of pain, disappointments and most importantly, love.",
              language: "French",
              year: 2013
            }
          },
          acting: {
            "Little Prince": {
              title: "Little Prince",
              link: "little_prince",
              description:
                "This performance is an attempt to show the story wrote by Antoine Exupery. Story of the relationship ,experiences of pain, disappointments and most importantly, love.",
              language: "French",
              year: 2013
            }
          }
        },
        Istanbul: {
          instalations: {
            "Little Prince": {
              title: "Little Prince",
              link: "little_prince",
              description:
                "This performance is an attempt to show the story wrote by Antoine Exupery. Story of the relationship ,experiences of pain, disappointments and most importantly, love.",
              language: "French",
              year: 2013
            }
          },
          photos: {
            "Little Prince": {
              title: "Little Prince",
              link: "little_prince",
              description:
                "This performance is an attempt to show the story wrote by Antoine Exupery. Story of the relationship ,experiences of pain, disappointments and most importantly, love.",
              language: "French",
              year: 2013
            }
          },
          paintings: {
            "Little Prince": {
              title: "Little Prince",
              link: "little_prince",
              description:
                "This performance is an attempt to show the story wrote by Antoine Exupery. Story of the relationship ,experiences of pain, disappointments and most importantly, love.",
              language: "French",
              year: 2013
            }
          },
          drawings: {
            "Little Prince": {
              title: "Little Prince",
              link: "little_prince",
              description:
                "This performance is an attempt to show the story wrote by Antoine Exupery. Story of the relationship ,experiences of pain, disappointments and most importantly, love.",
              language: "French",
              year: 2013
            }
          }
        }
      },
      activeMenu: 0,
      activeSubmenu: 0,
      scrollSpyOfsset: 300,
      fixedPositionX: null
    };
  },
  methods: {
    setActiveMenu(event, currentItem, lastActiveItem) {
      // console.log(currentItem);
      // debugger;
      this.fixedPositionX = currentItem
        ? currentItem.offsetTop + currentItem.offsetHeight
        : 0;
      let hash = currentItem ? currentItem.hash.split("-") : [0, 0, 0];
      this.activeMenu = hash[1];
      this.activeSubmenu = hash[2];
    }
  }
};
</script>
