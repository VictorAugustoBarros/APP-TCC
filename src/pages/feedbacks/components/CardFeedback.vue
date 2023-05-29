<template>
  <v-card width="250" :style="{ borderRadius: '30px', backgroundColor: this.color }">
    <v-card-item>
      <div>
        <div class="text-overline mb-1">
          {{this.data}}
        </div>
        <div class="text-h6 mb-1">
          Descricao
        </div>
        <div class="text-caption" >
          {{this.descicao}}
        </div>
      </div>
    </v-card-item>

    <v-card-actions style="justify-content: center;">
      <ModalFeedbacks :status="this.status" :key="this.key" />
      <br><br><br>
    </v-card-actions>
  </v-card>
</template>

  
<script>
import ModalFeedbacks from '@/pages/feedbacks/components/ModalFeedbacks';

export default {
  name: "CardFeedback",
  components: {
    ModalFeedbacks
  },
  data() {
    return {
      color: this.status === 'concluido' ? 'lightgreen' : '#ff8816'
    }
  },
  props: {
    objetivoKey: {
      type: String
    },
    key: {
      type: String
    },
    data: {
      type: String
    },
    descicao: {
      type: String
    },
    status: {
      type: String
    }
  }
};
</script>