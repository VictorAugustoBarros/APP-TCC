<template>
  <div id="app">
    <HomePage v-if="isAuthenticated"></HomePage>
    <LoginPage v-else></LoginPage>
  </div>
</template>

<script>
import LoginPage from './views/Login.vue'
import HomePage from './views/HomePage.vue'

export default {  
  
  name: 'App',
   components: {
        LoginPage,
        HomePage
    },
  data() {
    return {
      isAuthenticated: false
    };
  },
  created() {
    // @TODO -> Aplicar lógica de login consumindo a API.
    this.isAuthenticated = true;
  }
};
</script>