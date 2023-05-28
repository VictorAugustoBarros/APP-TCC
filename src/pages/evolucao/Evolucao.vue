<template>
  <v-card class="mx-auto" max-width="300" height="200px" style="border-radius: 50px;">
    <v-card-item title="Florida" style="text-align: center;" />
    <v-card-text class="py-0" style="background-color: red;">
      <v-row justify="center">
        
      </v-row>
    </v-card-text>
  </v-card>
  <v-row></v-row>

  <v-row style="height: 10px;">
    <v-col cols="2"></v-col>
    <v-col cols="8">
      <v-card class="mx-auto" style="border-radius: 10px;">
        <Pie :data="data" :options="options" />
      </v-card>
    </v-col>
    <v-col cols="2"></v-col>
  </v-row>
  
  
</template>

<script >
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Pie
  },
  data() {
    return chartConfig
  }
}
</script>
