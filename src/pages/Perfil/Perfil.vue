<template>
  <v-container style="overflow: auto" class="container" fluid>
    <div style="position: relative">
      <v-row style="background-color: gray; height: 25vh; border-radius: 13px">
        <v-img :src="this.user.user_banner" height="25vh" cover class="bg-grey-lighten-2"
          style="border-radius: 13px"></v-img>
      </v-row>
      <v-row style="height: 10vh">
        <v-avatar :image="this.user.user_icon" size="130" style="position: absolute; top: 60%; left: 5%"></v-avatar>
        <h1 style="position: absolute; left: 17%">{{ this.user.username }}</h1>

        <v-btn v-if="$route.params.username !== user.username" @click="solicitarAmizade"
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
import { mapActions } from 'vuex';

export default {
  name: "PerfilPage",
  data: function () {
    return {
      user: {},
    };
  },
  methods: {
    ...mapActions("user", ["GetUserByUsername"]),    
  },
  async created() {    
    this.username = this.$route.params.username;

    let username = this.username
    this.user = await this.GetUserByUsername({username})
  },
  solicitarAmizade(){
    console.log("Enviar notificação")
  }
};
</script>