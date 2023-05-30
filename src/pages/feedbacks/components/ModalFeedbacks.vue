<template>
  <div>
    <v-dialog v-model="dialog" persistent width="700">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" variant="outlined">
          {{ this.status === 'concluido' ? 'Detalhes' : 'Adicionar Feedback' }}
        </v-btn>
      </template>
      <v-card style="border-radius: 30px">
        <div style="padding: 30px">
          <v-card-title>
            <v-row style="text-align: center;justify-content: center;">
              <span class="text-h5">Novo Feedback: {{ convertDataFormat(this.data) }}</span>
            </v-row>
          </v-card-title>

          <v-container>
            <v-row>
              <v-col cols="12">
                <v-list-subheader>Em termos de progresso diário, qual foi o seu desempenho hoje?</v-list-subheader>
                <v-radio-group v-model="questao1" inline>
                  <v-radio label="1" value=1></v-radio>
                  <v-radio label="2" value=2></v-radio>
                  <v-radio label="3" value=3></v-radio>
                  <v-radio label="4" value=4></v-radio>
                  <v-radio label="5" value=5></v-radio>
                  <v-radio label="6" value=6></v-radio>
                  <v-radio label="7" value=7></v-radio>
                  <v-radio label="8" value=8></v-radio>
                  <v-radio label="9" value=9></v-radio>
                  <v-radio label="10" value=10></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-list-subheader>Nível de dificuldade dos desafios enfrentados hoje</v-list-subheader>
                <v-radio-group v-model="questao2" inline>
                  <v-radio label="1" value="1"></v-radio>
                  <v-radio label="2" value="2"></v-radio>
                  <v-radio label="3" value="3"></v-radio>
                  <v-radio label="4" value="4"></v-radio>
                  <v-radio label="5" value="5"></v-radio>
                  <v-radio label="6" value="6"></v-radio>
                  <v-radio label="7" value="7"></v-radio>
                  <v-radio label="8" value="8"></v-radio>
                  <v-radio label="9" value="9"></v-radio>
                  <v-radio label="10" value="10"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-list-subheader>Qual o nível de satisfação geral com o progresso feito até agora?</v-list-subheader>
                <v-radio-group v-model="questao3" inline>
                  <v-radio label="1" value="1"></v-radio>
                  <v-radio label="2" value="2"></v-radio>
                  <v-radio label="3" value="3"></v-radio>
                  <v-radio label="4" value="4"></v-radio>
                  <v-radio label="5" value="5"></v-radio>
                  <v-radio label="6" value="6"></v-radio>
                  <v-radio label="7" value="7"></v-radio>
                  <v-radio label="8" value="8"></v-radio>
                  <v-radio label="9" value="9"></v-radio>
                  <v-radio label="10" value="10"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-list-subheader>Quão perto você está de atingir o objetivo?</v-list-subheader>
                <v-radio-group v-model="questao4" inline>
                  <v-radio label="1" value="1"></v-radio>
                  <v-radio label="2" value="2"></v-radio>
                  <v-radio label="3" value="3"></v-radio>
                  <v-radio label="4" value="4"></v-radio>
                  <v-radio label="5" value="5"></v-radio>
                  <v-radio label="6" value="6"></v-radio>
                  <v-radio label="7" value="7"></v-radio>
                  <v-radio label="8" value="8"></v-radio>
                  <v-radio label="9" value="9"></v-radio>
                  <v-radio label="10" value="10"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-list-subheader>Avalie a qualidade e a eficácia das ações tomadas hoje.</v-list-subheader>
                <v-radio-group v-model="questao5" inline>
                  <v-radio label="1" value="1"></v-radio>
                  <v-radio label="2" value="2"></v-radio>
                  <v-radio label="3" value="3"></v-radio>
                  <v-radio label="4" value="4"></v-radio>
                  <v-radio label="5" value="5"></v-radio>
                  <v-radio label="6" value="6"></v-radio>
                  <v-radio label="7" value="7"></v-radio>
                  <v-radio label="8" value="8"></v-radio>
                  <v-radio label="9" value="9"></v-radio>
                  <v-radio label="10" value="10"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-textarea rows="1" v-model="observacao" label="*Observações"></v-textarea>
              </v-col>
            </v-row>
          </v-container>

          <v-card-actions>
            <v-btn class="flex-grow-1" variant="tonal" style="background-color: red;color:white;"
              @click="dialog = false">Fechar
            </v-btn>
            <v-btn class="flex-grow-1" style="background-color: green; color: white" variant="tonal"
              @click="salvarFeedback">Salvar
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>

    </v-dialog>
  </div>
</template>


<script>
import bus from '@/eventBus';

import DatePicker from '@/components/DatePicker';
import { cadastrarFeedbacks } from '@/services/feedbacks'

export default {
  name: "ModalObjetivos",
  components: {
    DatePicker
  },
  data() {
    return {
      dialog: false,

      questao1: null,
      questao2: null,
      questao3: null,
      questao4: null,
      questao5: null,
    }
  },
  props: {
    objetivoKey: {
      type: String
    },
    status: {
      type: String
    },
    data: {
      type: String
    },
    descicao: {
      type: String
    }
  },
  methods: {
    convertDataFormat(dataOriginal) {
      var partes = dataOriginal.split("-");
      var ano = partes[0];
      var mes = partes[1];
      var dia = partes[2];
      return dia + "/" + mes + "/" + ano;
    },
    async salvarFeedback(){
      if (!this.questao1 || !this.questao2 || !this.questao3 ||!this.questao4 ||!this.questao5 ){
          alert("Favor responder todas as perguntas!")
          return;
      }
      if (!this.observacao ){
          alert("Favor adicionar uma observação!")
          return;
      }
      
      await cadastrarFeedbacks({
        "objetivoKey": this.objetivoKey,
        "dataFeedback": this.data,
        "questao1": this.questao1,
        "questao2": this.questao2,
        "questao3": this.questao3,
        "questao4": this.questao4,
        "questao5": this.questao5,
        "observacao": this.observacao
      })

      bus.emit('update-feedbacks', {});
      this.dialog = false
    }
  },
};
</script>
