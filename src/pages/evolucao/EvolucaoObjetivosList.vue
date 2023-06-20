<template>
  <div class="text-center" >
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props" >
          Evolução Objetivos
        </v-btn>
      </template>

      <v-card style="overflow: hidden">
        <v-card-text>
          <v-row >
            <div class="div-cards" v-for="objetivo in this.objetivos" :key="objetivo.id" style="padding: 15px;">
              <CardObjetivoEvolucao :objetivoKey="objetivo.key" :title="objetivo.titulo" :categoria="objetivo.categoria"
                :descricao="objetivo.descricao" :image="objetivo.imagem" />
              <br>
            </div>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import EvolucaoObjetivos from './EvolucaoObjetivos'
import CardObjetivoEvolucao from "@/pages/objetivos/components/CardObjetivoEvolucao.vue";
import { LoadObjetivos } from '@/services/objetivos'

export default {
  name: "EvolucaoObjetivosList",
  components: {
    EvolucaoObjetivos,
    CardObjetivoEvolucao
  },
  data() {
    return {
      objetivos: [],
      dialog: false
    }
  },
  async created() {
    const response = await LoadObjetivos()
    if (!response.error) {
      this.objetivos = response
    }
  }
}
</script>