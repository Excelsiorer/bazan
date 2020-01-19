<template>
  <main class="container-fluide about">
    <cMenu v-if="showMenu" @closeMenu="showMenu = false" />
    <div class="row" v-if="showAnimation">
      <div class="about__container">
        <div class="about__left about__imgContainer col-12 animated fadeIn">
          <div class="about__img" id="about_0" v-parallax="0.3"></div>
        </div>
        <div class="about__right col-10 animated fadeIn">
          <ul class="menu menu--about">
            <li id="menuBtn">
              <div class="menu__el" @click="showMenu = true">menu</div>
            </li>
          </ul>
          <h1 class="h1 main__title animated slideInLeft fadeIn">
            Vera
            <br />Nikolaeva
          </h1>

          <div class="d-flex job">
            <ul class="job__list">
              <li class="job__el animated slideInLeft fadeIn" style="animation-delay: 0.1s;">
                <div class="col-5 line"></div>Artist
              </li>
              <li class="job__el animated slideInLeft fadeIn" style="animation-delay: 0.2s;">
                <div class="col-5 line"></div>Theater Director
              </li>
              <li class="job__el animated slideInLeft fadeIn" style="animation-delay: 0.3s;">
                <div class="col-5 line"></div>Art historian
              </li>
            </ul>
          </div>
          <p
            class="about--paragraph"
          >My artistic searches originate in my curious nature, sensuality and sensitivity to the perception of the world, the desire to penetrate deep into the object of creation, to thoroughly recognize matter. My initial search always begins with sensory perception, then coloristic and tactile. It is important for me to take an extraordinary approach to the process of creation at every stage.</p>
          <p
            class="about--paragraph"
          >I have a deep interest in the study of various cultures, rituals, ancient scriptures. The free flight of the soul, the state and feeling in this world of an eternal wanderer and a migratory bird, an endless craving for knowledge are the main source of my inspiration.</p>
          <p
            class="about--paragraph"
          >East, exotic, elemental forces and meditation are the source of energy and peace of my soul. My life is a journey from a million different shades, a book of life that I write — living every day like a small life.</p>
        </div>
      </div>

      <div
        class="about__container"
        v-for="(section, sectionKey, sectionI) in sections"
        :key="sectionKey"
      >
        <div class="about__left about__imgContainer col-12">
          <div class="about__img" :id="'about_' + (sectionI + 1)" v-parallax="0.3"></div>
          <h2 class="about__imgTitle">{{sectionKey}}</h2>
        </div>
        <div class="about__right col-10">
          <div class="about__event event" v-for="(item, itemKey) in section" :key="itemKey">
            <div class="event__title col-12" v-html="item.title"></div>
            <div class="event__description col-12" v-html="item.description"></div>
          </div>
          <!-- <div v-if="sectionI < Object.keys(sections).length - 1" class="line line--about col-6"></div> -->
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import cMenu from "../components/cMenu.vue";

export default {
  components: {
    cMenu
  },
  mounted: function() {
    this.$nextTick(function() {
      this.showAnimation = true;
    });
  },
  data: () => {
    return {
      showMenu: false,
      showAnimation: false,
      sections: {
        "About me": [
          {
            title: "Date and place of birth",
            description: "St.Petersburg, April 25,1994"
          },
          {
            title: "Current location",
            description: "Istanbul"
          },
          {
            title: "Knowledge<br> of foreign languages",
            description: "French, English"
          },
          {
            title: "The Department<br> of foreign art",
            description:
              "А comparative analysis of works by Henri Matisse’s Conversation and Auguste Renoir’s In the Garden, Tahitian mythology in Paul Gauguin’s Noa Noa, Gothic motifs and images of silence in the works of Odilon Redon."
          },
          {
            title: "The Department<br> of Russian art",
            description:
              "The theatrical works of M.Vrubel, Marc Chagall’s illustrations for the Daphnis and Chloe novel, theatrical murals by Marc Chagall for the Granovsky Jewish theatre, monumental works by Marc Chagall, female images in the works of Borisov-Musatov. <br><br> Active participant of the annual student conference at the Repin Academy of Arts. "
          }
        ],
        Education: [
          {
            title: "2001-2010:",
            description: "Art school named after Boris Kustodiev."
          },
          {
            title: "2001-2012:",
            description: "Gymnasium at the State Russian Museum."
          },
          {
            title: "2013-2016:",
            description:
              "Repin Academy of Fine Arts, Theory and History of Artsfaculty (bachelor)"
          },
          {
            title: "Diploma topic:",
            description: "Orientalismin the Painting of Henri Matisse."
          },
          {
            title: "2016-2019:",
            description:
              "MIR-5 workshop of individual <br> directing (led by Boris Yukhananov)."
          },
          {
            title: "2017-2019:",
            description:
              "The Higher School of Economics, History of Art Culture and Art Market faculty (master, the program was held in English)."
          },
          {
            title: "1st year of study:",
            description:
              "The Place and Role of Visual Images in the Theatre Of Dmitry Krymov."
          },
          {
            title: "2nd year of study:",
            description:
              "Biblical Motifs in Theatrical Sketches by Alexander Tyshler. Iconography and Interpretation."
          }
        ],
        "Additional Education": [
          {
            title: "2012",
            description:
              "Studied English at Cambridge school as part of the grant exchange program (Cambridge)."
          },
          {
            title: "2014",
            description:
              "Studied French at the Langueonze school as part of the grant program (Toulouse)."
          },
          {
            title: "2015",
            description:
              "Received a grant to study at the University of Helsinki as part of the summer Museum and Memorial Sites program."
          }
        ],
        Experience: [
          {
            title: "2012-2014",
            description:
              "Artistic Director of the theatre studio at the Repin’s Academy  of Arts. Created a number of performances in foreign languages (English, French). Participation in different theatre festivals with the play The Little Prince: 43 Sunsets. Creator of video performances and installations."
          },
          {
            title: "2013",
            description:
              "Took practice in the House-Museum of Chaliapin (St. Petersburg)."
          },
          {
            title: "2014",
            description:
              "Worked as a volunteer at The State Hermitage Museum (St. Petersburg)."
          },
          {
            title: "2015",
            description: "Worked as a volunteer in the Garage Museum (Moscow)."
          },
          {
            title: "2015",
            description:
              "Organized an exhibition of graduates students  at the Repin’s Academy of Art  at the Mystery art space (St. Petersburg)."
          },
          {
            title: "2016",
            description:
              "Worked as an intern in the curatorial Department of the NCCA."
          },
          {
            title: "2017- 2018",
            description:
              "Worked as a curator and art historian at the Tuman art gallery."
          },
          {
            title: "2019",
            description: "Worked as an art manager at the ARTSTORY gallery."
          }
        ],
        Awards: [
          {
            title: "2010",
            description:
              "Diploma of the Art School named after Boris Kustodiev."
          },
          {
            title: "2014",
            description:
              "Nominal award of the rector of the Academy of Arts S. I. Mikhailovsky for the creation and active development of the theater Studio at the Repin’s Academy."
          },
          {
            title: "2015",
            description:
              "Winner of the art critics competition at the Michelangelo school (Florence)."
          },
          {
            title: "2018",
            description:
              "Winner of the grant competition among Directors, Athens (Greece). Master class led by Andrew Vishnevski (London)."
          }
        ]
      }
    };
  }
};
</script>