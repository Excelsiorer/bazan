<template>
  <div class="container contacts">
    <div class="row animated fadeIn" v-if="showAnimation">
      <cMenu v-if="showMenu" @closeMenu="showMenu = false" />
      <ul class="menu">
        <li id="menuBtn">
          <div class="menu__el" @click="showMenu = true">menu</div>
        </li>
      </ul>
      <div class="col-24 contacts__body d-flex">
        <div class="col-12 contacts__info">
          <h3 class="h3">Turkey</h3>
          <p class="contacts__text">
            Istanbul
            <br />Balat Mahallesi
            <br />Kiremit Caddesi
            <br />Dindas Sokak No: 1
            <br />Fatih / İstanbul
          </p>
          <div class="col-24 d-flex contacts__infoBottom">
            <div class="contacts__infoBlock">
              <h3 class="h3">Russia</h3>
              <p class="contacts__text">
                Moscow
                <br />Pleteshkovskiy per.
                <br />str. 1, 18/20,
                <br />kv. 25
              </p>
              <h3 class="h3">Email</h3>
              <p class="contacts__text">ave@veranikolaeva.com</p>
              <h3 class="h3">Social</h3>
              <div class="social">
                <a href="#" target="_blank" class="social__ico social__ico--inst"></a>
                <a href="#" target="_blank" class="social__ico social__ico--fb"></a>
              </div>
            </div>
            <div class="contacts__infoBlock">
              <h3 class="h3">Cooperation</h3>
              <div class="contacts__infoText">
                <p class="contacts__text">
                  Im interested to take part in cinema/
                  theater production as director, actor,
                  set/stage designer.
                </p>
                <p class="contacts__text">
                  Making creative instalations, photos, videos
                  for different type of projects
                </p>
                <p class="contacts__text">
                  Сurating practise, teaching art history, different painting
                  and graphic tehniques
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 contacts__left">
          <h1 class="h1 animated slideInLeft fadeIn">
            Vera
            <br />Nikolaeva
          </h1>
          <div class="d-flex job contacts__job">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cMenu from "../components/cMenu.vue";

export default {
  name: "Contacts",
  data: () => {
    return {
      showMenu: false,
      showAnimation: false
    };
  },

  mounted: function() {
    this.$nextTick(function() {
      this.showAnimation = true;
    });
  },
  components: {
    cMenu
  }
};
</script>
