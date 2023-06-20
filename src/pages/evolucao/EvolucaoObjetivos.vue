<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">
          Visualizar Evolução
        </v-btn>
      </template>

      <v-card width="1000px">
        <v-card-text>
          <div>
            <canvas id="chart" />
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { getEvolucaoFeedbacksObjetivo } from "@/services/evolucao";
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns'; // Importe o módulo do adaptador date-fns

export default {
  name: "EvolucaoObjetivos",
  data() {
    return {
      dialog: false,
      timelineChart1: {
        load: false,
        data: {},
        options: {}
      },
    }
  },
  props: {
    objetivoKey: {
      type: String,
    }
  },
  created() {
    // Chame a função getFeedbacksChart() quando o componente for criado
    this.getFeedbacksChart();
  },
  watch: {
    dialog(newVal) {
      // Quando o dialog for verdadeiro (aberto), chame a função getFeedbacksChart()
      if (newVal) {
        this.getFeedbacksChart();
      }
    }
  },
  methods: {
    async getFeedbacksChart() {
      const feedbacks = await getEvolucaoFeedbacksObjetivo(this.objetivoKey);

      // Converter as datas para o formato correto (Date objects)
      const dates = feedbacks.map(feedback => new Date(feedback.data_feedback.split("/").reverse().join("-")));
      // Função de comparação de datas
      function compareDates(date1, date2) {
        return date1.getTime() - date2.getTime();
      }

      // Ordenar as datas por dia
      dates.sort(compareDates);

      // Converter as pontuações das questões em listas separadas
      const progresso = feedbacks.map(feedback => parseInt(feedback.questoes.split(",")[0].split("=")[1]));
      const dificuldade = feedbacks.map(feedback => parseInt(feedback.questoes.split(",")[1].split("=")[1]));
      const satisfacao = feedbacks.map(feedback => parseInt(feedback.questoes.split(",")[2].split("=")[1]));
      const atingimento = feedbacks.map(feedback => parseInt(feedback.questoes.split(",")[3].split("=")[1]));
      const eficacia = feedbacks.map(feedback => parseInt(feedback.questoes.split(",")[4].split("=")[1].replace(")", "")));

      // Configurar o gráfico
      const config = {
        type: 'line',
        data: {
          labels: dates,
          datasets: [
            {
              label: 'Progresso',
              data: progresso,
              borderColor: 'red',
              fill: false
            },
            {
              label: 'Dificuldade',
              data: dificuldade,
              borderColor: 'blue',
              fill: false
            },
            {
              label: 'Satisfação',
              data: satisfacao,
              borderColor: 'green',
              fill: false
            },
            {
              label: 'Atingimento',
              data: atingimento,
              borderColor: 'orange',
              fill: false
            },
            {
              label: 'Eficácia',
              data: eficacia,
              borderColor: 'purple',
              fill: false
            }
          ]
        },
        options: {
          scales: {
            x: {
              type: 'time',
              time: {
                parser: 'dd/MM/yyyy',
                tooltipFormat: 'dd/MM/yyyy',
                unit: 'day',
                displayFormats: {
                  day: 'dd/MM/yyyy'
                }
              },
              title: {
                display: true,
                text: 'Data de Feedback'
              },
              distribution: 'linear'
            },
            y: {
              title: {
                display: true,
                text: 'Pontuação'
              }
            }
          }
        }
      };
      const chartElement = document.getElementById('chart');
      if (chartElement) {
        Chart.register(...registerables);
        new Chart(chartElement, config);
      }
    }
  },
}
</script>
