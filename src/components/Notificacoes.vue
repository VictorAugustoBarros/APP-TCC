<template>
  <v-row justify="center">
    <v-menu min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props" size="40" :disabled="this.notificacoes.length === 0">
          <v-badge color="red" :content="this.notificacoes.length">
            <v-avatar icon="mdi-bell-outline" size=40></v-avatar>
          </v-badge>
        </v-btn>
      </template>
      <v-card style="justify-content: center;text-align: center;">
        <v-btn style="justify-content: center;" rounded variant="text" color="red"
          @click="limparNotificacoesUser()">
          Limpar Notificacoes
        </v-btn>
        <v-card-text style="height: 200px;overflow: auto;">
          <div v-for="notificacao in notificacoes" :key="notificacao.key" class="mx-auto text-center">
            <h3 v-if="!notificacao.amizade"> {{ notificacao.descricao }} </h3>
            <v-divider class="my-3" />
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-row>
</template>

<script>
import bus from '@/eventBus';
import { limparNotificacoes } from '@/services/notificacoes'


export default {
  name: "NotificacoesDropdown",
  props: {
    notificacoes: {
      type: Array
    }
  },
  methods: {
    async limparNotificacoesUser() {
      await limparNotificacoes()
      
      bus.emit('update-notificacao', {});
    },
  },
}
</script>

