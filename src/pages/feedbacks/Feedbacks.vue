<template>
  <v-container>
    <div v-if="loading">
      <v-row style="height: 30vh" />
      <v-row justify="center" class="full-height">
        <v-img width="100px" height="100px" src="@/assets/loading.gif" />
      </v-row>
    </div>

    <div v-else>
      <div v-if="this.feedbacks.length === 0">
        <v-row style="height: 30vh" />
        <v-row justify="center" class="full-height">
          <h1>Você não posssui nenhum Feedback!</h1>
        </v-row>
        <v-row justify="center" class="full-height">
          <h2>Crie um novo objetivo e boa sorte!</h2>
        </v-row>
      </div>

      <div v-else>
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="4" style="text-align: center">
            <h3 style="background-color: orangered;border-radius: 15px">Você tem {{ feedbacksPendentes }} feedbacks
              pendentes
            </h3>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
        <v-row style="height: 50px;"></v-row>
      </div>

      <v-row>
        <v-col v-for="feedback in feedbacks" :key="feedback.id" :cols="3">
          <div class="div-cards">
            <CardObjetivosFeedback :objetivoTitulo="feedback.objetivo.titulo" :objetivoKey="feedback.objetivo.key"
              :objetivoImagem="feedback.objetivo.imagem" />
          </div>
        </v-col>
      </v-row>
    </div>

  </v-container>
</template>

<script>
import bus from '@/eventBus'

import CardObjetivosFeedback from '@/pages/feedbacks/components/CardObjetivosFeedback'

import { LoadObjetivosFeedbacks } from '@/services/objetivos'


export default {
  name: "FeedbacksPage",
  components: {
    CardObjetivosFeedback
  },
  data() {
    return {
      loading: true,
      feedbacksPendentes: 5,
      feedbacks: []
    }
  },
  async created() {
    bus.on('update-card-objetivos-feedbacks', async () => {

      // TODO -> Trazer a quantidade de feedbacks do objetivo
      const objetivos = await LoadObjetivosFeedbacks()
      if (!objetivos.error) {
        for (let objetivo of objetivos) {
          this.feedbacks.push({
            "objetivo": {
              "key": objetivo.key,
              "titulo": objetivo.titulo,
              "imagem": objetivo.imagem
            }
          });
        }
      }

      this.loading = false
    }
    );

    bus.emit('update-card-objetivos-feedbacks', {});
  },
  beforeUnmount() {
    bus.off('update-objetivos');
  }
}
</script>
