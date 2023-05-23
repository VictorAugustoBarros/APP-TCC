<template>
  <v-container v-if="loadComponent">
    <v-row style="text-align: center;">
      <v-col cols=12>
        <h1>Editar Objetivo</h1>
      </v-col>
    </v-row>
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
              @change="handleCheckboxChange('individual')" />
          </v-col>
          <v-col cols="6">
            <label for="checkedCooperativo">Cooperativo</label><br>
            <input type="checkbox" id="checkedCooperativo" v-model="checkedCooperativo"
              :disabled="this.btnCooperativoEnable" @change="handleCheckboxChange('cooperativo')" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <CooperativeUsers v-model="modalUsersDisable" :disableDialog="modalUsersDisable" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea v-model="objetivo.descricao" style="rezise: none" rows="5" label="Descrição" variant="outlined"
              :maxlength="100"></v-textarea>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="4" class="d-flex align-center justify-center">
        <CardObjetivo :title="this.objetivo.titulo" :categoria="this.objetivo.categoria"
          :descricao="this.objetivo.descricao" :image="this.objetivo.imagem" :detalhes="false" />
      </v-col>
      <v-row>
        <v-col cols="3" />
        <v-col cols="6">
          <v-card-actions>
            <v-btn class="flex-grow-1" variant="tonal" @click="voltarObjetivos()">Voltar
            </v-btn>
            <v-btn class="flex-grow-1" style="background-color: #005b96; color: white" variant="tonal"
              @click="editarObjetivo()">Editar
            </v-btn>
          </v-card-actions>
        </v-col>
        <v-col cols="3" />
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import CardObjetivo from "@/components/CardObjetivo";
import objetivoStore from '@/store/objetivoStore';
import userCriterioStore from "@/store/userCriterioStore";
import CooperativeUsers from "@/components/CooperativeUsers";
import DatePicker from "@/components/DatePicker";

import { EditObjetivo } from '@/services/objetivos'

export default {
  name: "ObjetivosEdit",
  components: {
    CardObjetivo,
    CooperativeUsers,
    DatePicker
  },
  data() {
    return {
      userCriterioS: userCriterioStore(),

      objetivo: null,
      loadComponent: false,
      modalUsersDisable: true,
      btnCooperativoEnable: false,

      checkedIndividual: true,
      checkedCooperativo: false,
    };
  },
  async beforeMount() {
    const objetivoS = objetivoStore()
    this.objetivo = objetivoS.getObjetivosID(this.$route.query.objetivoKey)

    if (!this.objetivo) {
      this.$router.go(-1);
    }

    this.loadComponent = true
  },
  methods: {
    voltarObjetivos() {
      this.$router.push({ "name": "home.objetivos" })
    },
    async editarObjetivo() {
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
      const payload = JSON.parse(JSON.stringify(this.objetivo));

      const response = await EditObjetivo(payload)
      if (response) {
        this.$router.push({"name": "home.objetivos"})
      }

    },
    buscarObjetivo(id) {
      this.objetivo = this.getObjetivoById(id);
    },
    handleCheckboxChange(checkbox) {
      if (checkbox === 'individual' && this.checkedIndividual) {
        this.checkedCooperativo = false;
        this.modalUsersDisable = true;

      } else if (checkbox === 'cooperativo' && this.checkedCooperativo) {
        this.checkedIndividual = false;

        if (!this.userCriterioS.hasCriterio) {
          alert("Configure os critérios")
          this.checkedCooperativo = false;
          this.checkedIndividual = true;
          this.btnCooperativoEnable = true
          
        } else {
          this.modalUsersDisable = false;
        }
      }
    }
  }
}
</script>

  