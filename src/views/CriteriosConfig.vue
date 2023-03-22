<template>
  <v-container>
    <v-row style="height: 70vh">
      <v-col cols="3">
        <h2>Criterios</h2><br><br>
        <v-row style="padding: 0" v-for="criterio in this.criteriosBox" :key="criterio" :id="criterio">
          <v-checkbox :label="criterio" :value="criterio" v-model="criteriosSelecionados" />
        </v-row>
      </v-col>

      <v-divider vertical :thickness="1"></v-divider>

      <v-col cols="9">
        <v-row style="display: flex;justify-content: center;text-align: center;">
          <v-btn-toggle v-model="selecionado" color="primary" mandatory>
            <v-btn v-for="criterio in this.criteriosSelecionados" :value="criterio">
              {{ criterio }}
            </v-btn>
          </v-btn-toggle>
        </v-row>

        <br><br><br>
        <li v-for="comparison in this.comparisons[selecionado]" :key="comparison">
          <v-row style="display: flex;justify-content: center;text-align: center;">
            <v-col>
              {{ selecionado }}
            </v-col>
            <v-col>
              <v-select label="Escolha a Importância"
                :items="['Importância igual', 'Importância moderada', 'Importância forte', 'Importância muito forte', 'Importância extrema']"
                v-model="comparison.value"></v-select>
            </v-col>
            <v-col>
              {{ comparison.criterio }}
            </v-col>

          </v-row>
        </li>
      </v-col>
    </v-row>

    <v-row style="display: flex;justify-content: center;">
      <v-btn color="green" disabled="{{ button_atualizar }}">
        Atualizar
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { store } from '../store.js'

export default {
  name: 'CriteriosConfig',
  props: {
    button_atualizar: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    store.page.title = "Configuração Critérios"
  },
  data: function () {
    return {
      selecionado: undefined,
      criteriosBox: ["Esforço", "Período", "Tempo Conclusão", "Experiência", "Avaliação de Usuários"],
      criteriosSelecionados: [],
      comparisons: {},
    };
  },
  watch: {
    criteriosSelecionados(novosCriteriosSelecionados) {
      this.loadComparasions()
    }
  },
  methods: {
    // TODO -> Ajustar funçao das comparacoes entre criterios
    removeComparisonsNotUsed() {
      console.log("-----------------INICIO-------------------------");
      console.log(this.comparisons);
      for (let comparisonKey in this.comparisons) {

        // @TODO -> Finalizar logica
        for (let i = 0; i < this.comparisons[comparisonKey].length; i++) {
          if (!Object.values(this.criteriosSelecionados).includes(this.comparisons[comparisonKey][i].criterio)) {
            delete this.comparisons[comparisonKey][i]
          }
        }

        if (!Object.values(this.criteriosSelecionados).includes(comparisonKey)) {
          delete this.comparisons[comparisonKey]
        }
      }
      console.log("------------------FINAL-------------------------");
      console.log(this.comparisons);
      console.log("----------------------------------------------");
    },
    loadComparasions() {
      for (let i = 0; i < this.criteriosSelecionados.length; i++) {
        if (!this.comparisons[this.criteriosSelecionados[i]]) {
          this.comparisons[this.criteriosSelecionados[i]] = [];
        }
        for (let j = 0; j < this.criteriosSelecionados.length; j++) {
          if (i !== j) {
            if (this.criteriosSelecionados[i].includes(this.criteriosSelecionados[j])) {
              continue
            }

            this.comparisons[this.criteriosSelecionados[i]].push({
              "criterio": this.criteriosSelecionados[j],
              "value": null
            });
          }
        }
      }
      this.removeComparisonsNotUsed();
    }
  }
}

</script>

<style>
li {
  list-style-type: none;
}
</style>