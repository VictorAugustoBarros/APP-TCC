<template>
  <v-row style="height: 50px"></v-row>
  <v-row>
    <v-col cols="4" style="justify-content: center;text-align: center;">
      <div style="border-radius: 10px;background-color: white;">
        <h3>Objetivos</h3><br>
        <div>
          <Bar v-if="this.barChartObjetivos.load" :data="this.barChartObjetivos.data"
            :options="this.barChartObjetivos.options" />
        </div>
        <br>
      </div>
    </v-col>
    <v-col cols="4" style="justify-content: center;text-align: center;">
      <div style="border-radius: 10px;background-color: white;">
        <h3>Feedbacks</h3><br>
        <div>
          <!-- TODO -> Finalizar depois da inserção dos feedbacks -->
          <Bar v-if="this.barChartFeedbacks.load" :data="this.barChartFeedbacks.data" :options="this.barChartFeedbacks.options" />
        </div>
        <br>
      </div>
    </v-col>
    <v-col cols="4" style="justify-content: center;text-align: center;">
      <div style="border-radius: 10px;background-color: white;">
        <h3>Amizades</h3><br>
        <div>
          <Bar v-if="this.barChartAmizades.load" :data="this.barChartAmizades.data"
            :options="this.barChartAmizades.options" />
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
          <Radar v-if="this.radarChart.load" :data="this.radarChart.data" :options="this.radarChart.options" />
        </div>
        <br>
      </div>


    </v-col>
    <v-col cols="8" style="justify-content: center;text-align: center;">
      <div style="border-radius: 10px;background-color: white;">
        <h3>Objetivos</h3><br>
        <div>
          <Pie v-if="this.pieChart.load" :data="this.pieChart.data" :options="this.pieChart.options" />
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

// import { barChartAmizadesData, barChartAmizadesOptions } from './charts/barChartAmizades'
// import { barChartFeedbacksData, barChartFeedbacksOptions } from './charts/barChartFeedbacks'

// import { pieData, pieOptions } from './charts/pieChartConfig'
// import { radarData, radarOptions } from './charts/radarChartConfig'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title)
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler)


import { getEvolucaoObjetivos, getEvolucaoAmizades } from "@/services/evolucao";

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
        load: false,
        data: {},
        options: {}
      },
      barChartObjetivos: {
        load: false,
        data: {},
        options: {}
      },
      barChartAmizades: {
        load: false,
        data: {},
        options: {}
      },
      barChartFeedbacks: {
        load: false,
        data: {},
        options: {}
      },
      radarChart: {
        load: false,
        data: {},
        options: {}
      }
    }
  },
  beforeMount() {
    this.getObjetivosChart()
    this.getFeedbacksChart()
    this.getAmizadesChart()
    this.getRadarChart()
    this.getPieChart()
  },
  methods: {
    async getPieChart() {
      const dados = await getEvolucaoObjetivos();

      const labels = Object.keys(dados.quantidade)
      const datasets = [{
        backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
        data: Object.values(dados.quantidade),
      }]

      this.pieChart.options = {
        responsive: true,
        maintainAspectRatio: false,
      }
      this.pieChart.data = {
        labels: labels,
        datasets: datasets
      }

      this.pieChart.load = true
    },
    async getAmizadesChart() {
      const dados = await getEvolucaoAmizades();

      const labels = Object.keys(dados.quantidade_mes)
      const datasets = [{
        label: "Quantidade",
        backgroundColor: "blue",
        data: Object.values(dados.quantidade_mes),
      }]

      this.barChartAmizades.options = {
        responsive: true,
        maintainAspectRatio: false,
      }
      this.barChartAmizades.data = {
        labels: labels,
        datasets: datasets
      }

      this.barChartAmizades.load = true
    },
    async getObjetivosChart() {
      const dados = await getEvolucaoObjetivos();

      const labels = Object.keys(dados.quantidade_mes)
      const datasets = [
        {
          label: "Quantidade",
          backgroundColor: "blue",
          data: Object.values(dados.quantidade_mes),
        },
      ]

      this.barChartObjetivos.options = {
        responsive: true,
        maintainAspectRatio: false,
      }
      this.barChartObjetivos.data = {
        labels: labels,
        datasets: datasets
      }

      this.barChartObjetivos.load = true
    },
    async getRadarChart() {
      const dados = await getEvolucaoObjetivos();

      const labels = Object.keys(dados.categorias)
      const datasets = [{
        label: "Objetivos por categoria",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: Object.values(dados.categorias),
      }]

      this.radarChart.options = {
        responsive: true,
        maintainAspectRatio: false,
      }
      this.radarChart.data = {
        labels: labels,
        datasets: datasets
      }

      this.radarChart.load = true
    },
    async getFeedbacksChart() {
      const dados = await getEvolucaoAmizades();

      const labels = Object.keys(dados.quantidade_mes)
      const datasets = [{
        label: "Quantidade",
        backgroundColor: "blue",
        data: Object.values(dados.quantidade_mes),
      }]

      this.barChartFeedbacks.options = {
        responsive: true,
        maintainAspectRatio: false,
      }
      this.barChartFeedbacks.data = {
        labels: labels,
        datasets: datasets
      }

      this.barChartFeedbacks.load = true
    }
  }
}
</script>
