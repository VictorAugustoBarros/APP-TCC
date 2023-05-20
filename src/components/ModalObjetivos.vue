<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1200">
      <template v-slot:activator="{ props }">
        <v-btn rounded="xl" size="large" v-bind="props">+ Novo Objetivo</v-btn>
      </template>
      <v-card style="border-radius: 30px">
        <div style="padding: 30px">
          <v-card-title>
            <v-row>
              <v-col cols="9" class="text-center">
                <span class="text-h5">Novo Objetivo</span>
              </v-col>
              <v-col cols="3"> </v-col>
            </v-row>
          </v-card-title>

          <v-container>
            <v-row>
              <v-col cols="8">
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="titulo" label="Titulo" variant="outlined"></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="6">
                    <v-text-field v-model="categoria" label="Categoria" variant="outlined"></v-text-field>
                  </v-col>

                  <v-col cols="6">
                    <v-text-field v-model="imagem" label="Link Imagem" variant="outlined"></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="6">
                    <DatePicker />
                  </v-col>
                  <v-col cols="6">
                    <DatePicker />
                  </v-col>
                </v-row>

                <v-row class="text-center">
                  <v-col cols="6">
                    <label for="checkedIndividual">Individual</label>
                    <input type="checkbox" id="checkedIndividual" v-model="checkedIndividual"
                      @change="this.handleCheckboxChange(1)" />
                  </v-col>
                  <v-col cols="6">
                    <label for="checkedCooperativo">Cooperativo</label>
                    <input type="checkbox" id="checkedCooperativo" v-model="checkedCooperativo"
                      @change="this.handleCheckboxChange(2)" />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-textarea v-model="descricao" style="rezise: none" rows="5" label="Descrição" variant="outlined"
                      :maxlength="100"></v-textarea>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="4" class="d-flex align-center justify-center">
                <CardObjetivo :title="this.titulo" :categoria="this.categoria" :descricao="this.descricao"
                  :image="this.imagem" :detalhes="false" />
              </v-col>
            </v-row>
          </v-container>

          <v-card-actions>
            <v-btn class="flex-grow-1" variant="tonal" @click="cancelar">Fechar
            </v-btn>
            <v-btn class="flex-grow-1" style="background-color: #005b96; color: white" variant="tonal"
              @click="salvar">Salvar
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
import CardObjetivo from "@/components/CardObjetivo";

import DatePicker from "@/components/DatePicker";

export default {
  name: "ModalObjetivos",
  components: {
    DatePicker,
    CardObjetivo,
  },
  data() {
    return {
      titulo: "",
      categoria: "",
      imagem: "",
      descricao: "",

      checkedIndividual: true,
      checkedCooperativo: false,

      dialog: false,
      isHovered: false,
    };
  },
  methods: {
    cancelar() {
      this.dialog = false;
    },
    salvar() {
        
    },

    handleCheckboxChange(checkboxNumber) {
      if (checkboxNumber === 1) {
        this.checkedIndividual = true;
        this.checkedCooperativo = false;
      }
      else if (checkboxNumber === 2) {
        this.checkedIndividual = false;
        this.checkedCooperativo = true;
      }
    }
  },
};
</script>

<style >
textarea {
  resize: none;
}
</style>