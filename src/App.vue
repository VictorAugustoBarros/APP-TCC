<template>
  <div id="app">
    <HomePage v-if="isAuthenticated"></HomePage>
    <LoginPage v-else></LoginPage>
  </div>
</template>

<script>
import LoginPage from "./views/Login.vue";
import HomePage from "./views/HomePage.vue";
import axios from 'axios';

export default {
  name: "App",
  components: {
    LoginPage,
    HomePage,
  },
  data() {
    return {
      isAuthenticated: false,
    };
  },
  created() {
    // @TODO -> Aplicar lógica de login consumindo a API.
    const data = {
      "email": "victor.augustobarros@gmail.com",
      "password": "victor123",
    };

    axios.post('http://localhost:8000/users/login', data)
      .then(response => {
        // Manipula a resposta da solicitação
        console.log('Resposta:', response.data);
        this.isAuthenticated = true;
      })
      .catch(error => {
        // Manipula erros ocorridos durante a solicitação
        console.error('Erro:', error);
        this.isAuthenticated = false;
      });    
  },
};
</script>