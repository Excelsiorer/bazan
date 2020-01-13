<template>
  <div class="container single-project">
    <div class="row">
      <ul class="col-24 menu menu--project">
        <li class="col-3">
          <router-link to="/portfolio " class="menu__el menu__el--active">portfolio</router-link>
        </li>
        <li class="col-4 menu__li">
          <router-link to="/" class="menu__el">main page</router-link>
        </li>
        <li class="col-4 menu__li">
          <router-link to="/contacts " class="menu__el">contacts</router-link>
        </li>
        <li class="col-4 menu__li">
          <router-link to="/about " class="menu__el">about me</router-link>
        </li>
      </ul>
      <div class="project__list">
        <div class="col-24 d-flex project__body">
          <div class="project__description col-6">{{curProject.description}}</div>
          <div class="project__title-container">
            <h1
              class="project__title"
              :style="{'background-size': backgroundPercent + '% 100%'}"
            >{{curProject.link}}</h1>
          </div>
          <div class="project__photos">
            <img
              :src="
                  require('../assets/img/projects/'+ curProject.srcFolder +'/photos/' + photo)
              "
              class="project__photo"
              v-for="(photo, photoKey, photoI) in curProject.photos"
              :key="photoKey"
            />
            <img src="../assets/img/project__separator.png" class="project__photo--last" />
            <div class="project__separator"></div>
            <a :href="nextProjectLink" class="project__nextBtn">Следующая работа</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import allProjects from "../projects.js";

export default {
  mounted: function() {
    this.$nextTick(function() {
      window.addEventListener("scroll", this.setBackgroundSize);
      window.addEventListener("wheel", this.horizontalScrol);
    });
    // this.curProject = this.$route.params.id;
    this.curProject = this.getProject(this.$route.params.id);
    this.nextProjectLink = "/portfolio/" + this.getNextProject().link;
    // console.log(curProject);
    // this.projects[curProject.link] = curProject;
    // this.$set(this.projects, curProject.link, curProject);
  },
  methods: {
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
      if (event.deltaY != 0) {
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
  data: () => {
    return {
      backgroundPercent: 0,
      curProject: "",
      nextProjectLink: ""
    };
  }
};
</script>