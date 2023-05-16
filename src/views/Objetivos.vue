<template>
  <v-row>
    <v-col cols="10"></v-col>
    <v-col cols="2">
      <v-btn rounded="xl" size="large">Novo Objetivo</v-btn>
    </v-col>
  </v-row>

  <v-row>
      <div class="div-cards" v-for="card in cardsObjetivos" :key="card.id" style="padding: 15px">
        <CardObjetivo :title="card.title" :subtitle=card.subtitle :descricao=card.descricao :image=card.image />
      </div>
      
  </v-row>

</template>

<script>
import { store } from '../store.js'
import CardObjetivo from '../components/CardObjetivo.vue'


export default {
  name: 'ObjetivoPage',
  components: {
    CardObjetivo
  },
  data: function () {
    return {
      store,
      cardsObjetivos: [
        { title: "Correr 5km", subtitle: "Corrida", descricao: "Participar de uma corrida de 5km no parque de São José dos Pinhais", image:"https://www.sesc-rs.com.br/wp-content/uploads/2021/10/Corrida-de-Rua-GettyImages-1172155958.jpg" },
        { title: "Correr 10km", subtitle: "Corrida", descricao: "Participar de uma corrida de 5km em Curitiba", image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg"},
        { title: "Perder 10kg", subtitle: "Treino", descricao: "Participar de uma corrida de 5km em Curitiba", image: "https://conteudo.imguol.com.br/c/entretenimento/6a/2019/03/18/musculacao-treino-academia-exercicio-1552946244916_v2_836x1254.jpg" },
        { title: "Criar nova Rotina", subtitle: "Rotina", descricao: "Participar de uma corrida de 5km em Curitiba", image: "https://organizenapratica.com.br/wp-content/uploads/2021/08/o-que-e-rotina.jpg" },
        { title: "Estudar Python", subtitle: "Programação", descricao: "Participar de uma corrida de 5km em Curitiba", image: "https://idocode.com.br/wp-content/uploads/2021/07/programacao-scaled.jpg"},
      ]
    };
  },
  mounted() {
    store.page.title = "Objetivos"
  }
}

</script>

<style>
.div-cards {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
}
</style>