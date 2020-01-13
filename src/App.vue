<template>
  <div
    id="app"
    :class="{
            'app--contacts': $route.matched.some(
                ({ name }) => name === 'contacts'
            )
        }"
  >
    <transition name="slide">
      <router-view />
    </transition>
  </div>
</template>
