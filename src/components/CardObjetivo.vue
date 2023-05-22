<template>
  <v-card width="265" style="border-radius: 20px">
    <v-img class="align-end text-white" height="200" :src="image" cover>
      <v-card-title>{{ title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ categoria }}
    </v-card-subtitle>

    <v-card-text>
      <div>{{ descricao }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn class="flex-grow-1" color="blue" :disabled="!detalhes" @click="detalhesObjetivo()">
        Detalhes
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

  
<script>
export default {
  name: "CardObjetivo",
  props: {
    objetivoKey: {
      type: String,
    },
    title: {
      type: String,
    },
    categoria: {
      type: String,
    },
    descricao: {
      type: String,
    },
    image: {
      type: String,
    },
    detalhes: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    detalhesObjetivo() {
      this.$router.push({ "name": 'home.objetivos.detalhes', query: { objetivoKey: this.objetivoKey } });
    }
  },
};
</script>