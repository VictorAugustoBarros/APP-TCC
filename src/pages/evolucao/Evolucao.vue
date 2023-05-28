<template>
  <v-row>
    <v-col cols="3">
      <v-card class="mx-auto" max-width="250px" height="200px" style="border-radius: 50px;">
        <v-card-item title="Cards Completados" style="text-align: center;" />
        <v-row>
          <v-card-text class="py-0">
            <div style="background-color: gold; justify-content: center;text-align: center;">
              <div style="background-color: gold; height: 100%;width: 100%;justify-content: center;text-align: center;">
              <h1>3</h1>
            </div>
            </div>
          </v-card-text>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="3">
      <v-card class="mx-auto" max-width="250px" height="200px" style="border-radius: 50px;">
        <v-card-item title="Cards Completados" style="text-align: center;" />
        <v-row>
          <v-card-text class="py-0">
            <div style="background-color: gold; height: 100%;width: 100%;justify-content: center;text-align: center;">
              <h1>3</h1>
            </div>
          </v-card-text>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="3">
      <v-card class="mx-auto" max-width="250px" height="200px" style="border-radius: 50px;">
        <v-card-item title="Cards Completados" style="text-align: center;" />
        <v-row>
          <v-card-text class="py-0">
            <div style="background-color: gold; height: 100%;width: 100%;justify-content: center;text-align: center;">
              <h1>3</h1>
            </div>
          </v-card-text>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="3">
      <v-card class="mx-auto" max-width="250px" height="200px" style="border-radius: 50px;">
        <v-card-item title="Cards Completados" style="text-align: center;" />
        <v-row>
          <v-card-text class="py-0">
            <div style="background-color: gold; height: 100%;width: 100%;justify-content: center;text-align: center;">
              <h1>3</h1>
            </div>
          </v-card-text>
        </v-row>
      </v-card>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="4">
      <v-card class="mx-auto" max-width="300px" height="230px" style="border-radius: 50px;">
        <v-card-item title="Cards Completados" style="text-align: center;" />
        <v-row>
          <v-card-text class="py-0">
            <div style="background-color: gold; height: 100%;width: 100%;justify-content: center;text-align: center;">
              <h1>3</h1>
            </div>
          </v-card-text>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card class="mx-auto" max-width="300px" height="230px" style="border-radius: 50px;">
        <v-card-item title="Cards Completados" style="text-align: center;" />
        <v-row>
          <v-card-text class="py-0">
            <div
              style="background-color: lightgreen;  align-items: center; justify-content: center; border-radius: 10px; border: 10px solid green;">
              <div style="flex-grow: 1;">
                <h1
                  style="margin: 0; display: flex; justify-content: center; align-items: center;">
                  3</h1>
              </div>
            </div>
          </v-card-text>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card class="mx-auto" max-width="300px" height="230px" style="border-radius: 50px;">
        <v-card-item title="Cards Completados" style="text-align: center;" />
        <v-row>
          <v-card-text class="py-0">
            <div style="background-color: gold; height: 100%;width: 100%;justify-content: center;text-align: center;">
              <h1>3</h1>
            </div>
          </v-card-text>
        </v-row>
      </v-card>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="3"></v-col>
    <v-col cols="6">
      <v-card class="mx-auto" style="border-radius: 10px;">
        <Pie :data="data" :options="options" />
      </v-card>
    </v-col>
    <v-col cols="3"></v-col>
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
