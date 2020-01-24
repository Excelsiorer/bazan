<template>
  <div class="container single-project">
    <div class="row animated fadeIn" v-if="showAnimation">
      <cMenu v-if="showMenu" @closeMenu="showMenu = false" />
      <div class="photo animated fadeIn" v-if="curPhoto.src">
        <div class="photo__close" @click="closePhoto()"></div>
        <div class="photo__bg" @click="closePhoto()"></div>
        <img
          class="photo__img"
          :src="require('../assets/img/projects/'+ curProject.srcFolder +'/photos/' + curPhoto.src)"
        />
      </div>
      <ul class="menu">
        <li id="menuBtn">
          <div class="menu__el" @click="showMenu = true">menu</div>
        </li>
      </ul>
      <div class="project__list">
        <div class="d-flex project__body">
          <div class="project__description">
            <p
              v-for="(text, textI) in curProject.description"
              :key="'project__description' + textI"
              v-html="text"
            ></p>
          </div>
          <div class="project__title-container">
            <h1
              class="project__title"
              :style="{'background-size': backgroundPercent + '% 100%', 'font-size': getFontSize }"
            >{{curProject.title}}</h1>
          </div>
          <div class="project__photos">
            <img
              :src="
                  require('../assets/img/projects/'+ curProject.srcFolder +'/photos/' + photo)
              "
              class="project__photo"
              v-for="(photo, photoKey, photoI) in curProject.photos"
              :key="photoKey"
              @click="openPhoto(photo, )"
            />
            <img src="../assets/img/project__separator.png" class="project__photo--last" />
            <div class="project__separator"></div>
            <div class="project__nextBtn">
              <ul class="project__nextBtn-list">
                <li>
                  <a :href="nextProjectLink" class v-if="getNextProject()">next</a>
                  <div class="project__nextBtn-arrow"></div>
                </li>
                <li>
                  <router-link to="/portfolio">portfolio</router-link>
                  <div class="project__nextBtn-arrow"></div>
                </li>
                <li>
                  <div class="project__nextBtn-menu" @click="showMenu = true">menu</div>
                  <div class="project__nextBtn-arrow"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import allProjects from "../projects.js";
import cMenu from "../components/cMenu.vue";

export default {
  components: {
    cMenu
  },
  mounted: function() {
    this.$nextTick(function() {
      window.addEventListener("scroll", this.setBackgroundSize);
      window.addEventListener("wheel", this.horizontalScrol);
      this.showAnimation = true;
    });
    // this.curProject = this.$route.params.id;
    this.curProject = this.getProject(this.$route.params.id);
    this.nextProjectLink = "/portfolio/" + this.getNextProject().link;
    // console.log(this.$route.params.id);
    // this.projects[curProject.link] = curProject;
    // this.$set(this.projects, curProject.link, curProject);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.setBackgroundSize);
    window.removeEventListener("wheel", this.horizontalScrol);
  },
  methods: {
    openPhoto(photo) {
      this.curPhoto.src = photo;
      document.getElementsByTagName("html")[0].classList.add("block-scroll");
      this.blockScroll = true;
      // console.log(photo);

      // var img = document.getElementsByClassName("project__photo")[0];
      let img = new Image();
      img.src = require("../assets/img/projects/" +
        this.curProject.srcFolder +
        "/photos/" +
        photo);
      this.curPhoto.naturalHeight = img.naturalHeight;
      this.curPhoto.naturalWidth = img.naturalWidth;
    },
    closePhoto() {
      let menuOverlay = document.getElementsByClassName("photo")[0];
      menuOverlay.classList.remove("fadeIn");
      menuOverlay.classList.add("fadeOut");
      setTimeout(() => {
        this.curPhoto = {
          src: null,
          naturalWidth: null,
          naturalHeight: null
        };
        document
          .getElementsByTagName("html")[0]
          .classList.remove("block-scroll");
        this.blockScroll = false;
      }, 500);
    },
    getBackgroundSize(event) {
      let backgroundPercent =
        (window.scrollX * 100) /
        (document.body.scrollWidth - window.innerWidth);
      // console.log(backgroundPercent);
      return backgroundPercent;
    },
    setBackgroundSize() {
      this.backgroundPercent = this.getBackgroundSize();
    },
    horizontalScrol(event) {
      if (event.deltaY != 0 && !this.blockScroll) {
        // manually scroll horizonally instead
        window.scroll(window.scrollX + event.deltaY * 5, window.scrollY);

        // prevent vertical scroll
        event.preventDefault();
      }
      // this.nextProject();
      return;
    },
    nextProject() {
      if (this.getBackgroundSize() >= 99) {
        let nextProject = this.getNextProject();
        if (nextProject) {
          // if (!(nextProject.link in this.projects)) {
          // this.$router.push({ path: `/portfolio/${nextProject.link}` });
          // this.$set(this.projects, nextProject.link, nextProject);
          // }
        }
      }
    },
    projectList() {
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

      return projectList;
    },
    getProject(query) {
      let projectList = this.projectList();
      // console.log(projectList["ev_collaboration"]);
      if (query in projectList) {
        // console.log(projectList[query]);
        return projectList[query];
      }

      return false;
    },
    getNextProject() {
      let projectList = this.projectList();
      // let nextPosition = this.projects[this.curProject].position + 1;
      let nextPosition = this.curProject.position + 1;
      for (let project in projectList) {
        if (projectList[project].position == nextPosition) {
          return projectList[project];
        }
      }

      return false;
    }
  },
  computed: {
    getFontSize() {
      let fontSize = "14.4rem";
      if (this.curProject.title.length > 10) {
        fontSize = "10rem";
      }

      return fontSize;
    }
  },
  data: () => {
    return {
      backgroundPercent: 0,
      curProject: "",
      nextProjectLink: "",
      showMenu: false,
      showAnimation: false,
      curPhoto: {
        src: null,
        naturalWidth: null,
        naturalHeight: null
      },
      blockScroll: false
    };
  }
};
</script>