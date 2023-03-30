<template>
  <v-container>
    <v-row>
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
                v-model="comparison.value"

                ## Verificar funçao para ativar botao
                @change="verify_button_activate">
              </v-select>
            </v-col>
            <v-col>
              {{ comparison.criterio }}
            </v-col>

          </v-row>
        </li>
      </v-col>
    </v-row>

    <v-row style="display: flex;justify-content: center;">
      <v-btn v-on:click="submitCriterios" color="green" disabled="{{ button_atualizar }}">
        Salvar
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { store } from '../store.js'

export default {
  name: 'CriteriosConfig',
  mounted() {
    store.page.title = "Configuração Critérios"
  },
  data: function () {
    return {
      button_atualizar: false,
      selecionado: undefined,
      criteriosBox: ["Esforço", "Período", "Tempo Conclusão", "Experiência", "Avaliação de Usuários"],
      criteriosSelecionados: [],
      comparisons: {},
    };
  },
  watch: {
    criteriosSelecionados() {
      this.removeComparisonsNotUsed();
      this.loadComparasions();
    }
  },
  methods: {
    verify_button_activate() {
      console.log("Teste");
      let has_null_criterio = false;
      console.log(this.criteriosSelecionados.length);
      if (this.criteriosSelecionados.length <= 1) {
        return;
      }

      for (let comparisonKey in this.comparisons) {
        for (let i = 0; i < this.comparisons[comparisonKey].length; i++) {
          if (!this.comparisons[comparisonKey].value) {
            has_null_criterio = true;
            console.log("True");
            break;
          }
        }
      }
      console.log("Has null values: " + has_null_criterio);
      if (has_null_criterio){
        console.log("False");
        this.button_atualizar = false;
      }else{
        console.log("True");
        this.button_atualizar = true;
      }
    },
    removeComparisonsNotUsed() {
      for (let comparisonKey in this.comparisons) {
        for (let i = 0; i < this.comparisons[comparisonKey].length; i++) {
          if (!Object.values(this.criteriosSelecionados).includes(this.comparisons[comparisonKey][i].criterio)) {
            this.comparisons[comparisonKey].splice(i, 1);
          }
        }

        if (!Object.values(this.criteriosSelecionados).includes(comparisonKey)) {
          delete this.comparisons[comparisonKey]
        }
      }
    },
    loadComparasions() {
      for (let i = 0; i < this.criteriosSelecionados.length; i++) {
        if (!this.comparisons[this.criteriosSelecionados[i]]) {
          this.comparisons[this.criteriosSelecionados[i]] = [];
        }

        for (let j = 0; j < this.criteriosSelecionados.length; j++) {
          if (i !== j) {

            let chaveExiste = false;
            for (let k = 0; k < this.comparisons[this.criteriosSelecionados[i]].length; k++) {
              if (this.criteriosSelecionados[j] == this.comparisons[this.criteriosSelecionados[i]][k].criterio) {
                chaveExiste = true;
                break;
              }
            }

            if (!chaveExiste) {
              this.comparisons[this.criteriosSelecionados[i]].push({
                "criterio": this.criteriosSelecionados[j],
                "value": null
              });
            }
          }
        }
      }
    }
  }
}

</script>

<style>
li {
  list-style-type: none;
}
</style>