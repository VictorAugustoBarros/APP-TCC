<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-row class="justify-center">
          <h1>{{objetivo.titulo}}</h1>
        </v-row>
        <br><br><br>
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
            <v-textarea v-model="objetivo.descricao" style="rezise: none" rows="5" label="Descrição" variant="outlined"
              :maxlength="100"></v-textarea>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="4" class="d-flex align-center justify-center">
        Carregar possiveis usuários para conclusão cooperativa
      </v-col>
    </v-row>

    <v-row>
      <v-btn style="background-color: #005b96; color: white" variant="tonal" @click="salvar">Editar
      </v-btn>
      <v-btn style="background-color: red; color: white" variant="tonal" @click="salvar">Remover
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "ObjetivosDetalhes",
  data() {
    return {
      id: null,
      objetivo: null
    };
  },
  created() {
    console.log(this.getObjetivos())
    this.id = this.$route.query.id;
    this.buscarObjetivo(this.id)
  },
  methods: {
    ...mapGetters("objetivos", ["getObjetivos"]),
    buscarObjetivo(id) {
      this.objetivo = this.getObjetivoById(id);
    },
  },
  computed: {
    ...mapGetters("objetivos", ["getObjetivoById"])
  },
};
</script>'