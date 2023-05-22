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

        <v-btn v-if="$route.params.username !== user.username" :disabled="isFriend()" @click="sendFriendRequest"
          style="background-color: lightblue; position: absolute; top: 10%; left: 93%; transform: translate(-50%, -50%); z-index: 1">
          <span v-if="isFriend()">Adicionado ✓</span>
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
import { solicitarAmizade } from '@/services/user_amigos'
import { GetUserByUsername } from '@/services/users'
import {GetUserAmigos} from '@/services/user_amigos'

import userStore from '@/store/userStore';

export default {
  name: "PerfilPage",
  data: function () {
    return {
      user: null,
      userPerfil: {},
      loadPage: false,
      amigos: null,
      userS: userStore()
    };
  },
  async beforeMount() {
    const response = await GetUserByUsername(this.$route.params.username)
    this.userPerfil = response
    
    this.user = this.userS.getUser
    this.amigos = this.userS.getAmigos
    this.loadPage = true

  },
  methods: {
    async sendFriendRequest() {
      const payload = {
        "amigo_username": this.$route.params.username
      }

      const response = await solicitarAmizade(payload)
      
      if (response){
        await GetUserAmigos();
        
        this.$router.push({ path: this.$route.path });
      }
    },
    isFriend() {
      return this.amigos.some(amigo => amigo.username === this.$route.params.username);
  },
  },
};
</script>