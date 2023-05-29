<template>
  <div class="text-center">
    <v-dialog v-model="dialog" persistent width="1200">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" variant="outlined">
          {{ this.status === 'concluido' ? 'Detalhes' : 'Adicionar Feedback' }}
        </v-btn>
      </template>
      <v-card style="border-radius: 30px">
        <div style="padding: 30px">
          <v-card-title>
            <v-row>
              <v-col cols="9" class="text-center">
                <span class="text-h5">Novo Feedback {{ this.key }}</span>
              </v-col>
              <v-col cols="3"> </v-col>
            </v-row>
          </v-card-title>

          <v-container>
            <v-row>
              <DatePicker labelName="Data Feedback" />
            </v-row>
          </v-container>


          <v-card-actions>
            <v-btn class="flex-grow-1" variant="tonal" @click="dialog = false">Fechar
            </v-btn>
            <v-btn class="flex-grow-1" style="background-color: #005b96; color: white" variant="tonal"
              @click="salvar">Salvar
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>

    </v-dialog>
  </div>
</template>


<script>
import DatePicker from '@/components/DatePicker';
export default {
  name: "ModalObjetivos",
  components: {
    DatePicker
  },
  data() {
    return {
      dialog: false
    }
  },
  props: {
    key: {
      type: String
    },
    status: {
      type: String
    }
  }
};
</script>
