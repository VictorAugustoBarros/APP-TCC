<template>
  <v-row>
    <v-col cols="10"></v-col>
    <v-col cols="2">
      <v-btn rounded="xl" size="large">Novo Objetivo</v-btn>
    </v-col>
  </v-row>

  <v-row>
    <div
      class="div-cards"
      v-for="card in cardsObjetivos"
      :key="card.id"
      style="padding: 15px"
    >
      <CardObjetivo
        :title="card.titulo"
        :subtitle="card.subtitle"
        :descricao="card.descricao"
        :image="card.imagem"
      />
    </div>
  </v-row>
</template>

<script>
import store from '../store/store'
import CardObjetivo from "../components/CardObjetivo.vue";
import axios from "axios";
import { API_HOST } from "../constants";


export default {
  name: "ObjetivoPage",
  components: {
    CardObjetivo,
  },
  data: function () {
    return {
      store,
      cardsObjetivos: []
    }
  },
  mounted() {
    store.state.page.title = "Objetivos";
    this.getUserObjectives()
  },
  methods: {
    getUserObjectives() {
      const data = {
        user_id: store.state.user.id,
      };
      axios
        .post(`${API_HOST}/objetivos/user`, data, {
          "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
        })
        .then((response) => {
          this.cardsObjetivos = response.data
          console.log(this.objetivos);
        })
        .catch((error) => {
          // Manipula erros ocorridos durante a solicitação
          console.error("Erro:", error);
        });
    },
  },
};
</script>

<style>
.div-cards {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
}
</style>