<template>
  <v-card width="250">
    <v-img height="150" :src="objetivoImagem" cover class="text-white">
      <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
        <v-toolbar-title class="text-h6">
          {{ objetivoTitulo }}
        </v-toolbar-title>

      </v-toolbar>
    </v-img>

    <v-card-text>
      <div class="font-weight-bold ms-1 mb-2">
        <p style="color: black">Feedbacks: 5</p>
        <v-divider class="my-3" />
        <p style="color: orange">Pendentes: 2</p>
        <v-divider class="my-3" />
      </div>

      <v-timeline density="compact" align="start">
        <v-timeline-item v-for="timeline in timelines" :key="timeline.time" :dot-color="timeline.color" size="x-small">
          <div class="mb-4">
            <div class="font-weight-normal">
              <strong>{{ timeline.from }}</strong> {{ timeline.time }}
            </div>
            <div>{{ timeline.message }}</div>
          </div>
        </v-timeline-item>
      </v-timeline>

      <v-card-actions>
        <v-btn class="flex-grow-1" color="black" variant="tonal">
          Feedbacks
        </v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

  
<script>
export default {
  name: "CardFeedback",
  props: {
    objetivoTitulo: {
      type: String,
    },
    objetivoImagem: {
      type: String,
    },
    timelines: {
      type: Array
    },
  }
};
</script>