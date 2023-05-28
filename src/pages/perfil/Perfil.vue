<template v-if="load">
  <div v-if="this.userNotFound">
    <v-row style="height: 30vh" />
    <v-row justify="center" class="full-height">
      <h1>Usuário não encontrado!</h1>
    </v-row>
    <v-row justify="center" class="full-height">
      <h2>Verifique o nome e tente novamente!</h2>
    </v-row>
  </div>

  <v-container v-else style="overflow: auto" class="container" fluid>
    <div style="position: relative">
      <v-row style="background-color: gray; height: 25vh; border-radius: 13px">
        <v-img :src="this.userPerfil.userBanner" height="25vh" cover class="bg-grey-lighten-2"
          style="border-radius: 13px"></v-img>
      </v-row>
      <v-row style="height: 10vh">
        <v-avatar :image="this.userPerfil.userIcon" size="130" style="position: absolute; top: 60%; left: 5%"></v-avatar>
        <h1 style="position: absolute; left: 17%">{{ this.userPerfil.username }}</h1>

        <v-btn v-if="$route.params.username !== user.username"
          :disabled="this.isFriend || this.friendRequested || this.friendSendRequest" @click="sendFriendRequest"
          style="background-color: lightblue; position: absolute; top: 10%; left: 93%; transform: translate(-50%, -50%); z-index: 1">
          <span v-if="this.isFriend">Adicionado ✓</span>
          <span v-else-if="this.friendRequested || this.friendSendRequest">Solicitação ✓</span>
          <span v-else>Adicionar</span>
        </v-btn>
      </v-row>
    </div>

    <div style="padding-top: 50px">
      <div style="padding-bottom: 50px">
        <v-row style="height: 150px; background-color: white; border-radius: 13px"></v-row>
      </div>

      <div style="padding-bottom: 50px">
        <v-row style="height: 150px; background-color: white; border-radius: 13px"></v-row>
      </div>

      <div>
        <v-row style="height: 150px; background-color: white; border-radius: 13px"></v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import bus from '@/eventBus';

import userStore from '@/store/userStore';
import { getUserPerfilInfo } from '@/services/info'
import { sendNotificacaoAmizade } from '@/services/notificacoes'

export default {
  name: "PerfilPage",
  data: function () {
    return {
      user: userStore().getUser,

      userPerfil: {
        username: null,
        userBanner: null,
        userIcon: null,
      },

      userNotFound: false,

      friendSendRequest: false,
      isFriend: false,

    };
  },
  async created() {
    bus.on('update-perfil', async (username) => {
      const response = await getUserPerfilInfo(username)

      if (!response.error) {
        this.userPerfil.username = response.username
        this.userPerfil.userBanner = response.userBanner
        this.userPerfil.userIcon = response.userIcon
        this.friendSendRequest = response.friendRequest
        this.isFriend = response.isFriend

        this.userNotFound = false

      } else {
        this.userNotFound = true
      }
    });

    bus.emit('update-perfil', this.$route.params.username);
  },
  beforeUnmount() {
    bus.off('update-perfil');
  },
  methods: {
    async sendFriendRequest() {
      const response = await sendNotificacaoAmizade(this.$route.params.username)
      if (response.success) {
        this.friendSendRequest = true;
      }
    }
  }
};
</script>