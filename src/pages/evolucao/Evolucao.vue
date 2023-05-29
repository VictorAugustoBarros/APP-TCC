<template>
  <v-row style="height: 50px"></v-row>
  <v-row>
    <v-col cols="4" style="justify-content: center;text-align: center;">
      <div style="border-radius: 10px;background-color: white;">
        <h3>Objetivos</h3><br>
        <div>
          <Bar :data="this.barChartObjetivos.data" :options="this.barChartObjetivos.options" />
        </div>
        <br>
      </div>
    </v-col>
    <v-col cols="4" style="justify-content: center;text-align: center;">
      <div style="border-radius: 10px;background-color: white;">
        <h3>Feedbacks</h3><br>
        <div>
          <!-- TODO -> Finalizar depois da inserção dos feedbacks -->
          <Bar :data="this.barChartFeedbacks.data" :options="this.barChartFeedbacks.options" />
        </div>
        <br>
      </div>
    </v-col>
    <v-col cols="4" style="justify-content: center;text-align: center;">
      <div style="border-radius: 10px;background-color: white;">
        <h3>Amizades</h3><br>
        <div>
          <Bar :data="this.barChartAmizades.data" :options="this.barChartAmizades.options" />
        </div>
        <br>
      </div>
    </v-col>
  </v-row>
  
  <v-row>
    <v-col cols="4" style="justify-content: center;text-align: center;">
      <div style="border-radius: 10px;background-color: white;">
        <h3>Categorias</h3><br>
        <div>
          <Radar :data="this.radarChart.data" :options="this.radarChart.options" />
        </div>
        <br>
      </div>


    </v-col>
    <v-col cols="8" style="justify-content: center;text-align: center;">
      <div style="border-radius: 10px;background-color: white;">
        <h3>Objetivos</h3><br>
        <div>
          <Pie :data="this.pieChart.data" :options="this.pieChart.options" />
        </div>
        <br>
      </div>
    </v-col>
  </v-row>

  <v-row>
  </v-row>
</template>

<script >
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, BarElement, CategoryScale, LinearScale, RadialLinearScale, PointElement, LineElement, Filler, } from 'chart.js'

import { Bar } from 'vue-chartjs'
import { Pie } from 'vue-chartjs'
import { Radar } from 'vue-chartjs'


import { barChartObjetivosData, barChartObjetivosOptions } from './charts/barChartObjetivos'
import { barChartAmizadesData, barChartAmizadesOptions } from './charts/barChartAmizades'
import { barChartFeedbacksData, barChartFeedbacksOptions } from './charts/barChartFeedbacks'

import { pieData, pieOptions } from './charts/pieChartConfig'
import { radarData, radarOptions } from './charts/radarChartConfig'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title)
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler)


// TODO -> Recarregar os dados ao entrar na página
export default {
  name: 'App',
  components: {
    Pie,
    Bar,
    Radar
  },
  data() {
    return {
      pieChart: {
        data: pieData,
        options: pieOptions
      },
      barChartObjetivos: {
        data: barChartObjetivosData,
        options: barChartObjetivosOptions
      },
      barChartAmizades: {
        data: barChartAmizadesData,
        options: barChartAmizadesOptions
      },
      barChartFeedbacks: {
        data: barChartFeedbacksData,
        options: barChartFeedbacksOptions
      },
      radarChart: {
        data: radarData,
        options: radarOptions
      }
    }
  }
}
</script>
