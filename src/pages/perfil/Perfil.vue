<template>
  <v-container v-if="load" style="overflow: auto" class="container" fluid>
    <div style="position: relative">
      <v-row style="background-color: gray; height: 25vh; border-radius: 13px">
        <v-img :src="this.userBanner" height="25vh" cover class="bg-grey-lighten-2"
          style="border-radius: 13px"></v-img>
      </v-row>
      <v-row style="height: 10vh">
        <v-avatar :image="this.userIcon" size="130" style="position: absolute; top: 60%; left: 5%"></v-avatar>
        <h1 style="position: absolute; left: 17%">{{ this.username }}</h1>

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
import userStore from '@/store/userStore';

import { getUserPerfilInfo } from '@/services/info'
import { solicitarAmizade } from '@/services/user_amigos'

export default {
  name: "PerfilPage",
  data: function () {
    return {
      load: false,

      username: null,
      userBanner: null,
      userIcon: null,
      
      user: userStore().getUser
    };
  },
  async beforeMount() {
    const response = await getUserPerfilInfo(this.$route.params.username)
    if (!response.error){
      this.username = response.username
      this.userBanner = response.userBanner
      this.userIcon = response.userIcon
    }
    
    this.load = true
  },
  methods: {
    async sendFriendRequest() {
      // const payload = {
      //   "amigo_username": this.$route.params.username
      // }

      // const response = await solicitarAmizade(payload)
    }
  }
};
</script>