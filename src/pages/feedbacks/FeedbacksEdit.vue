<template>
  <div style="text-align: center;">
    <h1>{{ this.$route.query.objetivoTitulo }}</h1>
  </div>

  <h2>Pendentes</h2>
  <v-row>
    <v-col v-for="cardsFeedback in this.cardsFeedbacksPendentes" :key="cardsFeedback.key" :cols="3">
      <div style="padding: 15px">
        <CardFeedback :key="cardsFeedback.key" :data=cardsFeedback.data :status=cardsFeedback.status :objetivoKey="this.objetivoKey" />
      </div>
    </v-col>
  </v-row>

  <br><br><br>
  <h2>Concluidos</h2>
  <v-row>
    <v-col v-for="cardsFeedback in this.cardsFeedbacksConcluidos" :key="cardsFeedback.key" :cols="3">
      <div style="padding: 15px">
        <CardFeedback :key="cardsFeedback.key" :data=cardsFeedback.data :observacao=cardsFeedback.observacao
          :status=cardsFeedback.status :objetivoKey="this.objetivoKey" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import bus from '@/eventBus';
import DatePicker from '@/components/DatePicker';
import CardFeedback from './components/CardFeedback.vue';

import { getFeedbacks } from '@/services/feedbacks'

export default {
  name: "FeedbacksEditPage",
  components: {
    DatePicker,
    CardFeedback
  },
  data() {
    return {
      objetivoKey: this.$route.params.objetivoKey,

      cardsFeedbacksPendentes: [],
      cardsFeedbacksConcluidos: []
    }
  },
  async created() {
    bus.on('update-feedbacks', async () => {
      this.cardsFeedbacksPendentes = []
      this.cardsFeedbacksConcluidos = []

      const feedbacks = await getFeedbacks(this.objetivoKey)
      if (!feedbacks.error) {
        for (const feedbackP of feedbacks.pendentes) {
          this.cardsFeedbacksPendentes.push({
            "data": feedbackP,
            "status": "pendente"
          })
        }

        for (const feedbackC of feedbacks.concluidos) {
          console.log(feedbackC)
          this.cardsFeedbacksConcluidos.push({
            "ket": feedbackC.key,
            "data": feedbackC.data,
            "observacao": feedbackC.observacao,
            "status": "concluido"
          })
        }
      }

    });
    bus.emit('update-feedbacks', {});
  },
  beforeUnmount() {
    bus.off('update-feedbacks');
  },
}
</script>