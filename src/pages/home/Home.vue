<template>
  <v-app style="background-color: #ededf2">
    <v-container class="container" fluid>
      <NavBar />

      <v-row>
        <v-col cols="2" style="padding-top: 0">
          <UserCard :width="250" :height="120" />
          <br />
          <MenuApp />
        </v-col>
        <v-col
          cols="8"
          style="background-color: #cfd5e1; border-radius: 10px; padding: 25px"
        >
          <div class="container" style="height: auto">
            <router-view></router-view>
          </div>
        </v-col>
        <v-col cols="2" style="padding-top: 0">
          <div style="overflow: auto; height: 85vh">
            <ListaAmigos />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import UserCard from "@/components/Card.vue";
import MenuApp from "@/components/Menu.vue";
import ListaAmigos from "@/components/ListaAmigos.vue";
import NavBar from "@/components/NavBar.vue";

import store from "../../store";
import axios from "axios";
import { API_HOST } from "@/http/constants";

export default {
  name: "HomePage",
  data: function () {
    return {
      store,
    };
  },
  components: {
    UserCard,
    MenuApp,
    ListaAmigos,
    NavBar,
  },
  mounted() {
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

<style>
*::-webkit-scrollbar,
*::-webkit-scrollbar-thumb {
  display: none;
  width: 26px;
  border-radius: 13px;
  background-clip: padding-box;
  border: 10px solid transparent;
}

*::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0 10px;
}
</style>

