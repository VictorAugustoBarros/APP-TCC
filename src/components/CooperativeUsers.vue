<template>
  <div class="text-center">
    <v-dialog v-model="dialog" :disabled="disableDialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn :disabled="disableDialog" rounded variant="outlined" v-bind="props" @click="loadUserRecomendacao">Pesquisar
          usuários</v-btn>
      </template>

      <div v-if="loading">
        <v-row justify="center" class="full-height">
          <v-img width="100px" height="100px" src="@/assets/loading.gif" />
        </v-row>
      </div>

      <div v-else>
        <div v-if="this.userRecomendacoes.length == 0" style="justify-content: center;text-align: center;">
          <v-card>
            <v-card-text>
              <p style="color: red">
                Infelizmente não encontramos nenhum usuário para recomendação!
              </p>
              <br>
              <p>
                Favor tentar novamente mais tarde.
              </p>
            </v-card-text>
          </v-card>
        </div>

        <div v-else v-for="user in userRecomendacoes" :key="user.id" style="width: 400px; padding-bottom: 10px;">

          <v-card :style="{ backgroundColor: user.recomendado ? 'lightgreen' : '' }" style="border-radius: 25px;">

            <div class="d-flex flex-no-wrap justify-space-between" style="height: 150px;">
              <div>
                <v-card-title class="text-h5">
                  {{ user.username }}
                </v-card-title>

                <v-card-subtitle>{{ user.resultado }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn v-if="user.enviarSolicitacaoAtivo" @click="enviarSolicitacao(user.username)" class="ms-2"
                    variant="outlined">
                    Enviar Solicitação
                  </v-btn>
                  <v-btn v-else disabled style="color: green;" variant="outlined">
                    Solicitação ✓
                  </v-btn>
                  <v-btn class="ms-2" variant="outlined" :href="'/perfil/' + user.username" target="_blank">
                    Perfil
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" rounded="0" style="position: relative;">
                  <span v-if="user.recomendado" style="position: absolute; top: 0; right: 0; border: 1px solid black;border-radius: 5px;padding-left: 10px;padding-right: 10px;">Recomendado</span>
                <v-img :src="user.user_icon" style="height: 50px;width: 50px;"></v-img>
              </v-avatar>
            </div>
          </v-card>

        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { buscarRelacionamentosRecomendacao } from '@/services/user_amigos'
import { sendNotificacao } from '@/services/notificacoes'
import userStore from '@/store/userStore';

export default {
  name: "CooperativeUsers",
  data() {
    return {
      dialog: false,
      userRecomendacoes: [],
      loading: true
    }
  },
  props: {
    disableDialog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    async loadUserRecomendacao() {
      const result = await buscarRelacionamentosRecomendacao()
      if (!result.error) {
        this.userRecomendacoes = result

      } else {
        this.userRecomendacoes = []
      }
      this.loading = false
    },
    enviarSolicitacao(username) {
      const user = this.userRecomendacoes.find(user => user.username === username);
      if (user) {
        user.enviarSolicitacaoAtivo = false;
        sendNotificacao({
          "username": username,
          "descricao": "usuário " + userStore().getUsername + " quer realizar um objetivo de forma cooperativa!"
        });
      }
    }
  }
}
</script>

<style>
.green-border {
  border-color: green;
}
</style>