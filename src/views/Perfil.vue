<template>
  <v-container style="overflow: auto" class="container" fluid>
    <div style="position: relative">
      <v-row style="background-color: gray; height: 25vh; border-radius: 13px">
        <v-img
          src="images/foto-capa.jpg"
          height="25vh"
          cover
          class="bg-grey-lighten-2"
          style="border-radius: 13px"
        ></v-img>
      </v-row>
      <v-row style="height: 10vh">
        <v-avatar
          image="images/user-icon.png"
          size="130"
          style="position: absolute; top: 60%; left: 5%"
        ></v-avatar>
        <h1 style="position: absolute; left: 17%">{{ store.state.user.name }}</h1>
      </v-row>
    </div>

    <div style="padding-top: 50px">
      <div style="padding-bottom: 50px">
        <v-row
          style="height: 150px; background-color: white; border-radius: 13px"
        ></v-row>
      </div>

      <div style="padding-bottom: 50px">
        <v-row
          style="height: 150px; background-color: white; border-radius: 13px"
        ></v-row>
      </div>

      <div>
        <v-row
          style="height: 150px; background-color: white; border-radius: 13px"
        ></v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import store from '../store/store'
import axios from "axios";
import { API_HOST } from "../constants";

export default {
  name: "PerfilPage",
  data: function () {
    return {
      store,
    };
  },
  mounted() {
    store.state.page.title = "Perfil";

    const data = {
      user_id: store.state.user.id,
    };

    axios
      .post(`${API_HOST}/users/id`, data, {
        "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
      })
      .then((response) => {
        store.state.user.name = response.data.name;
        store.state.user.email = response.data.email;
        store.state.user.password = response.data.password;
        store.state.user.username = response.data.username;
        store.state.user.followers = response.data.followers;
        store.state.user.following = response.data.following;
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  },
};
</script>