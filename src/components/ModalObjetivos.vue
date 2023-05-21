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
                    <v-text-field v-model="objetivo.titulo" label="Titulo" variant="outlined"></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="6">
                    <v-text-field v-model="objetivo.categoria" label="Categoria" variant="outlined"></v-text-field>
                  </v-col>

                  <v-col cols="6">
                    <DatePicker labelName="Data Fim" v-model="objetivo.data_fim" />
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="objetivo.imagem" label="Link Imagem" variant="outlined"></v-text-field>
                  </v-col>
                </v-row>

                <v-row class="text-center">
                  <v-col cols="6">
                    <label for="checkedIndividual">Individual</label><br>
                    <input type="checkbox" id="checkedIndividual" v-model="checkedIndividual"
                      @change="this.handleCheckboxChange(1)" />
                  </v-col>
                  <v-col cols="6">
                    <label for="checkedCooperativo">Cooperativo</label><br>
                    <input type="checkbox" id="checkedCooperativo" v-model="checkedCooperativo"
                      @change="this.handleCheckboxChange(2)" />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-textarea v-model="objetivo.descricao" style="rezise: none" rows="5" label="Descrição"
                      variant="outlined" :maxlength="100"></v-textarea>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="4" class="d-flex align-center justify-center">
                <CardObjetivo :title="this.objetivo.titulo" :categoria="this.objetivo.categoria" :descricao="this.objetivo.descricao"
                  :image="this.objetivo.imagem" :detalhes="false" />
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

import { mapActions, mapGetters } from "vuex";

export default {
  name: "ModalObjetivos",
  components: {
    DatePicker,
    CardObjetivo,
  },
  data() {
    return {
      objetivo: {
        titulo: "",
        categoria: "",
        imagem: "",
        descricao: "",
        data_fim: "",
      },

      checkedIndividual: true,
      checkedCooperativo: false,

      dialog: false,
      isHovered: false,
    };
  },
  methods: {
    ...mapActions("objetivos", ["CreateObjetivo"]),
    ...mapActions("objetivos", ["LoadObjetivos"]),
    ...mapGetters("auth", ["getToken"]),
    cancelar() {
      this.dialog = false;
    },
    async salvar() {
      if (!this.objetivo.titulo || !this.objetivo.categoria || !this.objetivo.imagem || !this.objetivo.descricao || !this.objetivo.data_fim) {
        alert("Favor inserir todos os dados!")
        return;
      }

      const currentDate = new Date(); // Data atual
      const targetDate = new Date(this.objetivo.data_fim); // Data de destino

      if (targetDate < currentDate) {
        alert("Escolher uma data final maior que hoje!")
        return;
      }
      let token = this.getToken();
      let payload = JSON.parse(JSON.stringify(this.objetivo));
      
      const response = await this.CreateObjetivo({ payload, token })
      if (!response) {
        alert(response.error);
        return
      }

      this.$emit('modal-fechado');
      
      this.dialog = false;
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