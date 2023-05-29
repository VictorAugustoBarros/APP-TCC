<template>
  <div style="text-align: center;">
    <h1>{{ this.$route.query.objetivoTitulo }}</h1>
  </div>
  
  <h2>Pendentes</h2>
  <v-row>
    <v-col v-for="cardsFeedback in this.cardsFeedbacksPendentes" :key="cardsFeedback.key" :cols="3">
      <div style="padding: 15px">
        <CardFeedback :key="cardsFeedback.key" :data=cardsFeedback.data :descicao=cardsFeedback.descricao
          :status=cardsFeedback.status :objetivoKey="this.objetivoKey"/>
      </div>
    </v-col>
  </v-row>
  
  <br><br><br>
  <h2>Concluidos</h2>
  <v-row>
    <v-col v-for="cardsFeedback in this.cardsFeedbacksConcluidos" :key="cardsFeedback.key" :cols="3">
      <div style="padding: 15px">
        <CardFeedback :key="cardsFeedback.key" :data=cardsFeedback.data :descicao=cardsFeedback.descricao
          :status=cardsFeedback.status :objetivoKey="this.objetivoKey" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import DatePicker from '@/components/DatePicker';
import CardFeedback from './components/CardFeedback.vue';

export default {
  name: "FeedbacksEditPage",
  components: {
    DatePicker,
    CardFeedback
  },
  data() {
    return {
      objetivoKey: this.$route.params.objetivoKey,

      cardsFeedbacksPendentes: [
        {
          "key": "9",
          "data": "26/05/2023",
          "descricao": "asdasdsadasdsad",
          "status": "pendente"
        },
        {
          "key": "10",
          "data": "26/05/2023",
          "descricao": "asdasdas",
          "status": "pendente"
        }
      ],
      cardsFeedbacksConcluidos: [
        {
          "key": "1",
          "data": "23/05/2023",
          "descricao": "Teste 1",
          "status": "concluido"
        },
        {
          "key": "2",
          "data": "26/05/2023",
          "descricao": "Teste 2",
          "status": "concluido"
        },
        {
          "key": "3",
          "data": "26/05/2023",
          "descricao": "Teste 3",
          "status": "concluido"
        },
        {
          "key": "4",
          "data": "26/05/2023",
          "descricao": "Teste 3",
          "status": "concluido"
        },
        {
          "key": "5",
          "data": "26/05/2023",
          "descricao": "Teste 3",
          "status": "concluido"
        },
        {
          "key": "6",
          "data": "26/05/2023",
          "descricao": "Teste 3",
          "status": "concluido"
        },
        {
          "key": "7",
          "data": "26/05/2023",
          "descricao": "Teste 3",
          "status": "concluido"
        },
        {
          "key": "8",
          "data": "26/05/2023",
          "descricao": "Teste 3",
          "status": "concluido"
        }
      ]
    }
  },
}
</script>