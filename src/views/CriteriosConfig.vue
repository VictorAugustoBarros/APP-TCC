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
                v-model="comparison.value"
                ></v-select>
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

export default {
  name: 'CriteriosConfig',
  props: {
    button_atualizar: {
      type: Boolean,
      default: false,
    },
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
    criteriosSelecionados() {
      this.loadComparasions()
    }
  },
  methods: {
    // TODO -> Ajustar funçao das comparacoes entre criterios
    loadComparasions() {
      for (let i = 0; i < this.criteriosSelecionados.length; i++) {
        if (!this.comparisons[this.criteriosSelecionados[i]]) {
          this.comparisons[this.criteriosSelecionados[i]] = [];
        }
        console.log(this.comparisons);     
        for (let j = 0; j < this.criteriosSelecionados.length; j++) {
          if (i !== j) {
            // if (this.comparisons[this.criteriosSelecionados[i]].value){
            //   continue
            // }            
            this.comparisons[this.criteriosSelecionados[i]].push({
              "criterio": this.criteriosSelecionados[j],
              "value": null
            });
          }
        }
      }
    //   console.log("teste");
    //   let criteriosVazios = false;

    //   console.log(this.comparisons);
    //   if (!this.comparisons.length) {
    //     return
    //   }
    //   Object.keys(this.comparisons).forEach(function (key) {
    //     if (this.comparisons[key].value === null) {
    //       criteriosVazios = true;
    //     }
    //   });

    //   if (criteriosVazios) {
    //     this.button_atualizar = true;
    //   } else {
    //     this.button_atualizar = false;
    //   }
    // }
    }
  }
}

</script>

<style>
li {
  list-style-type: none;
}
</style>