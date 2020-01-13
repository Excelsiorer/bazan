<template>
  <div class="container contacts">
    <div class="row">
      <ul class="col-24 menu">
        <li class="col-3">
          <router-link to="/contacts " class="menu__el menu__el--active">contacts</router-link>
        </li>
        <li class="col-4 menu__li">
          <router-link to="/" class="menu__el">main page</router-link>
        </li>
        <li class="col-4 menu__li">
          <router-link to="/portfolio " class="menu__el">portfolio</router-link>
        </li>
        <li class="col-4 menu__li">
          <router-link to="/about " class="menu__el">about me</router-link>
        </li>
      </ul>
      <div class="col-24 contacts__body d-flex">
        <div class="col-12 contacts__info">
          <h3 class="h3">Turkey</h3>
          <p>
            Istanbul
            <br />Balat Mahallesi
            <br />Kiremit Caddesi
            <br />Dindas Sokak No: 1
            <br />Fatih / İstanbul
          </p>
          <div class="col-24 d-flex contacts__infoBottom">
            <div class="contacts__infoBlock">
              <h3 class="h3">Russia</h3>
              <p>
                Moscow
                <br />Pleteshkovskiy per.
                <br />str. 1, 18/20,
                <br />kv. 25
              </p>
              <h3 class="h3">Email</h3>
              <p>ave@veranikolaeva.com</p>
              <h3 class="h3">Social</h3>
              <div class="social">
                <a href="#" target="_blank" class="social__ico social__ico--inst"></a>
                <a href="#" target="_blank" class="social__ico social__ico--fb"></a>
              </div>
            </div>
            <div class="contacts__infoBlock">
              <h3 class="h3">Cooperation</h3>
              <div class="contacts__infoText">
                <p>
                  Im interested to take part in cinema/
                  theater production as director, actor,
                  set/stage designer.
                </p>
                <p>
                  Making creative instalations, photos, videos
                  for different type of projects
                </p>
                <p>
                  Teaching art history, different painting and
                  graphic tehniques(i have unique courses
                  methodology)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 contacts__left">
          <h1 class="h1">
            Vera
            <br />Nikolaeva
          </h1>
          <div class="d-flex job contacts__job">
            <ul class="job__list">
              <li class="job__el">
                <div class="col-5 line"></div>Artist
              </li>
              <li class="job__el">
                <div class="col-5 line"></div>Theater Director
              </li>
              <li class="job__el">
                <div class="col-5 line"></div>Art historian
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
