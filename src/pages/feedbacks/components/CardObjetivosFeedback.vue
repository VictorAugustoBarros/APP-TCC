<template>
  <v-card width="250">
    <v-img height="150" :src="objetivoImagem" cover class="text-white">
      <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark"></v-toolbar>
    </v-img>

    <v-card-text>
      <v-toolbar-title class="text-h6">
          {{ objetivoTitulo }}
      </v-toolbar-title>
      <v-divider class="my-3" />
      <div class="font-weight-bold ms-1 mb-2">
        <p style="color: black">Feedbacks: 5</p>
        <br>
        <p style="color: orange">Pendentes: 2</p>
      </div>

      <v-card-actions>
        <v-btn class="flex-grow-1" color="black" variant="tonal" @click="detalhesObjetivoFeedback">
          Feedbacks
        </v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

  
<script>
export default {
  name: "CardObjetivosFeedback",
  props: {
    objetivoKey: {
      type: String,
    },
    objetivoTitulo: {
      type: String,
    },
    objetivoImagem: {
      type: String,
    }
  },
  methods: {
    detalhesObjetivoFeedback() {
      this.$router.push({
        "name": 'feedback.detalhes', params: {objetivoKey: this.objetivoKey }, query: {objetivoTitulo: this.objetivoTitulo}
      });
    }
  },
};
</script>