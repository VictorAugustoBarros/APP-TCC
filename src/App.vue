<template>
  <div id="app">
    <HomePage v-if="isAuthenticated"></HomePage>
    <LoginPage v-else></LoginPage>
  </div>
</template>

<script>
import LoginPage from "./views/Login.vue";
import HomePage from "./views/HomePage.vue";
import { store } from "./store.js";

export default {
  name: "App",
  components: {
    LoginPage,
    HomePage,
  },
  computed: {
    isAuthenticated() {
      return store.state.isAuthenticated;
    },
  }
};
</script>