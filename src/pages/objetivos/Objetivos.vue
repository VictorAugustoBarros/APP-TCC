<template>
  <v-container>

    <div v-if="loading">
      <v-row style="height: 30vh" />
      <v-row justify="center" class="full-height">
        <v-img width="100px" height="100px" src="@/assets/loading.gif" />
      </v-row>
    </div>

    <div v-else>
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
          <CardObjetivo :objetivoKey="objetivo.key" :title="objetivo.titulo" :categoria="objetivo.categoria"
            :descricao="objetivo.descricao" :image="objetivo.imagem" />
        </div>
      </v-row>
    </div>


  </v-container>
</template>

<script>
import bus from '@/eventBus';

import CardObjetivo from "@/pages/objetivos/components/CardObjetivo";
import ModalObjetivos from "@/pages/objetivos/components/ModalObjetivos";

import { LoadObjetivos } from '@/services/objetivos'

export default {
  name: "ObjetivoPage",
  emits: ['updateCard'],
  components: {
    CardObjetivo,
    ModalObjetivos,
  },
  data: function () {
    return {
      loading: true,
      objetivos: [],
      mostrarModalNovoObjetivo: false,
      loadPage: false,
    };
  },
  async created() {
    bus.on('update-objetivos', async () => {
      const response = await LoadObjetivos()
      if (!response.error) {
        this.objetivos = response
      }
      this.loading = false
    });
    bus.emit('update-objetivos', {});
  },
  beforeUnmount() {
    bus.off('update-objetivos');
  },
  methods: {
    recarregarComponente() {
      bus.emit('update-card', {});
      bus.emit('update-objetivos', {});
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