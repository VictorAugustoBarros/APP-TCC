<template>
  <v-container v-if="loadPage">
    <v-row>
      <v-col cols="10"></v-col>
      <v-col cols="2">
        <ModalObjetivos @modal-fechado="recarregarComponente" />
      </v-col>
    </v-row>

    <div v-if="this.objetivos.length === 0">
      <v-row style="height: 30vh" />
      <v-row justify="center" class="full-height">
        <h1>Infelizmente você não posssui nenhum objetivo!</h1>
      </v-row>
      <v-row justify="center" class="full-height">
        <h2>Crie um novo objetivo e boa sorte!</h2>
      </v-row>
    </div>

    <v-row>
      <div class="div-cards" v-for="objetivo in this.objetivos" :key="objetivo.id" style="padding: 15px">
        <CardObjetivo :objetivoKey="objetivo.key" :title="objetivo.titulo" :categoria="objetivo.categoria" :descricao="objetivo.descricao"
          :image="objetivo.imagem" />
      </div>
    </v-row>
  </v-container>
</template>

<script>
import CardObjetivo from "@/pages/objetivos/components/CardObjetivo";
import ModalObjetivos from "@/pages/objetivos/components/ModalObjetivos";

import { LoadObjetivos } from '@/services/objetivos'

export default {
  name: "ObjetivoPage",
  components: {
    CardObjetivo,
    ModalObjetivos,
  },
  data: function () {
    return {
      objetivos: [],
      mostrarModalNovoObjetivo: false,
      loadPage: false
    };
  }, 
  beforeMount() {
    this.LoadUserObjetivos()
  },
  methods: {
    async LoadUserObjetivos() {
      const response = await LoadObjetivos()
      if (!response.error){
        this.objetivos = response
      }

      this.loadPage = true;
    },
    recarregarComponente() {
      this.LoadUserObjetivos()
    },
    exibirModal() {
      this.mostrarModalNovoObjetivo = true;
    }    
  },
};
</script>

<style>
.div-cards {
  display: flex;
  justify-content: center;
  /* Centraliza horizontalmente */
  align-items: center;
  /* Centraliza verticalmente */
}
</style>