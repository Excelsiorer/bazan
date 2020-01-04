<template>
    <div
        id="app"
        :class="{
            'app--contacts': $route.matched.some(
                ({ name }) => name === 'contacts'
            )
        }"
    >
        <router-view />
    </div>
</template>
