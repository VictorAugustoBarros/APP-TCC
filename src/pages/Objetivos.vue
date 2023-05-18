<template>
  <v-row>
    <v-col cols="10"></v-col>
    <v-col cols="2">
      <ModalObjetivos @modal-fechado="recarregarComponente" />
    </v-col>
  </v-row>

  <div v-if="cardsObjetivos.length === 0">
    <v-row style="height: 30vh" />
    <v-row
      justify="center"
      align="center"
      class="full-height"
    >
    <h1>Infelizmente você não posssui nenhum objetivo!</h1>
    </v-row>
    <v-row
      justify="center"
      align="center"
      class="full-height"
    >
      <h2>Crie um novo objetivo e boa sorte!</h2>
    </v-row>
  </div>

  <v-row>
    <div
      class="div-cards"
      v-for="card in cardsObjetivos"
      :key="card.id"
      style="padding: 15px"
    >
      <CardObjetivo
        :title="card.titulo"
        :categoria="card.subtitle"
        :descricao="card.descricao"
        :image="card.imagem"
      />
    </div>
  </v-row>
</template>

<script>
import store from "../store";
import CardObjetivo from "../components/CardObjetivo.vue";
import ModalObjetivos from "../components/ModalObjetivos.vue";
import axios from "axios";
import { API_HOST } from "../http/constants";

export default {
  name: "ObjetivoPage",
  components: {
    CardObjetivo,
    ModalObjetivos,
  },
  data: function () {
    return {
      store,
      mostrarModalNovoObjetivo: false,
      cardsObjetivos: [],
    };
  },
  mounted() {
    store.state.page.title = "Objetivos";
    this.getUserObjectives();
  },
  methods: {
    recarregarComponente() {
      this.getUserObjectives();
    },
    exibirModal() {
      this.mostrarModalNovoObjetivo = true;
    },
    getUserObjectives() {
      const data = {
        user_id: store.state.user.id,
      };
      axios
        .post(`${API_HOST}/objetivos/user`, data, {
          "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
        })
        .then((response) => {
          this.cardsObjetivos = response.data;
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