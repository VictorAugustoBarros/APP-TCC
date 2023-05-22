<template>
  <v-container v-if="loadPage" style="overflow: auto" class="container" fluid>
    <div style="position: relative">
      <v-row style="background-color: gray; height: 25vh; border-radius: 13px">
        <v-img :src="this.userPerfil.user_banner" height="25vh" cover class="bg-grey-lighten-2"
          style="border-radius: 13px"></v-img>
      </v-row>
      <v-row style="height: 10vh">
        <v-avatar :image="this.userPerfil.user_icon" size="130" style="position: absolute; top: 60%; left: 5%"></v-avatar>
        <h1 style="position: absolute; left: 17%">{{ this.userPerfil.username }}</h1>

        <v-btn v-if="$route.params.username !== user.username" @click="sendFriendRequest"
          style="background-color: lightblue; position: absolute; top: 10%; left: 95%; transform: translate(-50%, -50%); z-index: 1">
          Adicionar
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
import { solicitarAmizade } from '@/services/user_amigos'
import { GetUserByUsername } from '@/services/users'

import userStore from '@/store/userStore';

export default {
  name: "PerfilPage",
  data: function () {
    return {
      user: null,
      userPerfil: {},
      loadPage: false
    };
  },
  async beforeMount() {
    const response = await GetUserByUsername(this.$route.params.username)
    if (response.error) {
      alert(response.error);
      this.$router.go(-1);
    }
    this.userPerfil = response

    const userS = userStore()
    this.user = userS.getUser

    this.loadPage = true
  },
  methods: {
    async sendFriendRequest() {
      const payload = {
        "amigo_username": this.$route.params.username
      }

      const response = await solicitarAmizade(payload)
      if (response){
        alert("Solicitação enviada!")
      }
    }
  },
};
</script>