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
        Salvar
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CriteriosPage',
  data: function () {
    return {
      selecionado: null,
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
  async mounted() {
    let payload = {
        token: this.getToken()
    }
    this.comparisons = await this.GetUserCriterios(payload)
  },
  methods: {
    ...mapActions("criterios", ["SetUserCriterios", "GetUserCriterios"]),
    ...mapGetters("auth", ["getToken"]),
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
    },
    verificarCamposVazios() {
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
      if (this.verificarCamposVazios()){
        let payload = {
          criterios: this.comparisons,
          token: this.getToken()
        }

        this.SetUserCriterios(payload)
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