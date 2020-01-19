<template>
  <div
    id="app"
    :class="{
            'app--contacts': $route.matched.some(
                ({ name }) => name === 'contacts'
            ),
            'app--menu': $route.matched.some(
                ({ name }) => name === 'menu'
            ),
        }"
  >
    <vue-page-transition name="fade">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
export default {
  watch: {
    $route: function() {
      window.scrollTo(0, 0);
    }
  }
};
</script>