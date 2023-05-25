<template>
  <v-row justify="center">
    <v-menu min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props" size="40">
          <v-badge color="red" :content="this.notificacoes.length" >
            <v-avatar icon="mdi-bell-outline" size=40></v-avatar>
          </v-badge>
        </v-btn>
      </template>
      <v-card>
        <v-card-text style="height: 200px;overflow: auto;">
          <div v-for="notificacao in notificacoes" :key="notificacao.id" class="mx-auto text-center">
            <h3> {{ notificacao.descricao }} </h3>
            <v-divider class="my-3" />
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-row>
</template>

<script>

import {getNotificacoes} from '@/services/notificacoes'

export default {
  name: "NotificacoesDropdown",
  data: () => ({
    notificacoes: []
    }),
  async beforeMount() {
    // const notificacoes = await getNotificacoes()
    // if (!notificacoes.error){
    //   this.notificacoes = notificacoes
    // }    
  },
}
</script>

