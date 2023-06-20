<template>
  <v-container>
    <v-row style="height: 700px;">
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
            <v-btn v-for="criterio in criteriosSelecionados" :key="criterio" :value="criterio">
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
                v-model="comparison.value" @change="verify_button_activate">
              </v-select>
            </v-col>
            <v-col>
              {{ comparison.criterio }}
            </v-col>
          </v-row>
        </li>
      </v-col>
    </v-row>

    <v-row style="justify-content: center;">
      <v-btn v-on:click="submitCriterios" color="green">

        <span v-if="!comparisonOnLoad">Salvar</span>
        <span v-else>Editar</span>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>

import { SetUserCriterios, GetUserCriterios } from '@/services/criterios'
import userStore from '@/store/userStore';


export default {
  name: 'CriteriosPage',
  data: function () {
    return {
      hasCriterios: userStore(),

      selecionado: null,
      criteriosBox: ["Esforço", "Período", "Tempo Conclusão", "Experiência", "Avaliação de Usuários"],
      criteriosSelecionados: [],
      comparisons: {},
      comparisonOnLoad: false,
      jaAdicionados: []
    };
  },
  watch: {
    criteriosSelecionados() {
      this.criterioSelecionado()
      this.removeComparisonsNotUsed();
      this.loadComparasions();
    }
  },
  async mounted() {

    this.comparisons = await GetUserCriterios()

    if (Object.keys(this.comparisons).length > 0) {
      this.comparisonOnLoad = true
      this.mount_comparisons()
    }
  },
  methods: {
    mount_comparisons() {
      for (const comparison in this.comparisons) {
        this.criteriosSelecionados.push(comparison);
      }
      this.criterioSelecionado()
      this.removeComparisonsNotUsed();
      this.loadComparasions();
    },
    criterioSelecionado() {
      if (!this.selecionado && this.criteriosSelecionados) {
        this.selecionado = this.criteriosSelecionados[0]
      }

      if (!this.criteriosSelecionados.includes(this.selecionado) && this.criteriosSelecionados) {
        this.selecionado = this.criteriosSelecionados[0]
      }
    },
    verify_button_activate() {
      if (this.criteriosSelecionados.length <= 1) {
        return;
      }

      for (let comparisonKey in this.comparisons) {
        for (let i = 0; i < this.comparisons[comparisonKey].length; i++) {
          if (!this.comparisons[comparisonKey].value) {
            break;
          }
        }
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

        for (let j = i + 1; j < this.criteriosSelecionados.length; j++) {
          const currentComparison = this.comparisons[this.criteriosSelecionados[i]];

          if (!Array.isArray(currentComparison)) {
            continue;
          }

          let chaveExiste = currentComparison.some(
            item => item.criterio === this.criteriosSelecionados[j]
          );

          if (!chaveExiste) {
            currentComparison.push({
              criterio: this.criteriosSelecionados[j],
              value: null
            });
          }
        }
      }
    },
    verificarCamposVazios() {
      if (this.criteriosSelecionados.length == 0) {
        alert(`Favor definir seus critérios!`);
        return false;
      }
      if (this.criteriosSelecionados.length == 1) {
        alert(`Favor selecionar outro critério!`);
        return false;
      }

      for (let key in this.comparisons) {
        let criterios = this.comparisons[key];
        for (let i = 0; i < criterios.length; i++) {
          let criterio = criterios[i];
          if (criterio.value === null) {
            alert(`O campo "${key} -> ${criterio.criterio}" está vazio!`);
            return false;
          }
        }
      }
      return true;
    },
    submitCriterios() {
      if (this.verificarCamposVazios()) {
        alert("Critérios salvo com sucesso")
        SetUserCriterios(this.comparisons)
        this.hasCriterios.setCriterios(true);
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