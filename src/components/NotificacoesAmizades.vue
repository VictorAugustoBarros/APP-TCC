<template>
  <v-row justify="center">
    <v-menu min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props" size="40" :disabled="this.friendRequests.length === 0">
          <v-badge color="red" :content="this.friendRequests.length">
            <v-avatar icon="mdi-account-multiple-plus-outline" size=40></v-avatar>
          </v-badge>
        </v-btn>
      </template>
      <v-card>
        <v-card-text style="height: 200px;overflow: auto;">
          <div v-for="friendRequest in friendRequests" :key="friendRequest.key" class="mx-auto text-center">
            <h3> {{ friendRequest.username }} </h3>
            <v-btn rounded variant="text" color="green" @click="aceitarFriendRequest(friendRequest)">
              Aceitar
            </v-btn>
            <v-btn rounded variant="text" color="red" @click="removerFriendRequest(friendRequest.key)">
              Remover
            </v-btn>
            <v-divider class="my-3"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-row>
</template>

<script>
import bus from '@/eventBus';
import userStore from '@/store/userStore';

import { deleteFriendRequest, sendNotificacao } from '@/services/notificacoes'
import { adicionarAmizade } from '@/services/user_amigos'

export default {
  name: "NotificacoesAmizades",
  props: {
    friendRequests: {
      type: Array
    }
  },
  methods: {
    async aceitarFriendRequest(friendRequest) {
      await adicionarAmizade(friendRequest.username)
      await deleteFriendRequest(friendRequest.key)
      await sendNotificacao({
        "username": friendRequest.username,
        "descricao": "usuário " + userStore().getUsername + " aceitou seu pedido de amizade!"
      })

      bus.emit('update-card', {});
      bus.emit('update-amigos', {});
      bus.emit('update-notificacao-amizades', {});

    },
    async removerFriendRequest(notificacao_key) {
      await deleteFriendRequest(notificacao_key)
      bus.emit('update-notificacao-amizades', {});
    },
  },
}
</script>

