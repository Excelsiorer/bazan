<template>
  <main class="container-fluide main">
    <div class="row">
      <div class="col-11" v-if="showAnimation">
        <div class="main__img animated fadeIn"></div>
      </div>
      <div class="col-13 main__body animated slideInDown">
        <h1 class="h1 main__title">
          Vera
          <br />Nikolaeva
        </h1>
        <div class="d-flex main__menu">
          <div class="col-5 line line--main"></div>
          <ul class="main__menu-menu">
            <li class="main__menu-el animated slideInLeft fadeIn">
              <router-link to="/portfolio">portfolio</router-link>
            </li>
            <li class="main__menu-el animated slideInLeft fadeIn" style="animation-delay: 0.1s;">
              <router-link to="/about">about me</router-link>
            </li>
            <li class="main__menu-el animated slideInLeft fadeIn" style="animation-delay: 0.2s;">
              <router-link to="/contacts">contacts</router-link>
            </li>
          </ul>
        </div>
        <div class="d-flex main__info">
          <div class="col-5 line line--main2"></div>
          <div class="col-6">
            <h3 class="h3">About me:</h3>
            <p class="p-mini p-mini--main">
              Born in Saint - Petersburg, Russia.Worked and
              studied in Moscow for 5 years and is curently based
              in Istanbul.
              <br />
              <br />A free spirited traveller artist.
            </p>
          </div>
          <div class="col-6 offset-1">
            <h3 class="h3">Inspiration:</h3>
            <p class="p-mini p-mini--main">
              My inspiration started from exotic countries,
              ancient mythology and cultures,deep feeling, thin
              soul touches,water element power and free birds.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted: function() {
    this.$nextTick(function() {
      this.showAnimation = true;
    });
  },
  data: () => {
    return {
      showAnimation: false
    };
  }
};
</script>