<template>
  <div id="app">
    <HomePage v-if="this.isAuthenticated"></HomePage>
    <LoginPage v-else></LoginPage>
  </div>
</template>

<script>
import LoginPage from "./views/Login.vue";
import HomePage from "./views/HomePage.vue";
import store from '../src/store/store';

export default {
  name: "App",
  components: {
    LoginPage,
    HomePage,
  },
  computed: {
    isAuthenticated() {
      return store.state.Authenticated;
    },
  }
};
</script>