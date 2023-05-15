<template>
  <title>{{ store.page.title }}</title>
  <v-app style="background-color: #ededf2">
    <v-container class="container" fluid>

      <NavBar />

      <v-row>
        <v-col cols="2" style="padding-top: 0">
          <UserCard :width=250 :height=120 />
          <br>
          <MenuApp />

        </v-col>
        <v-col cols="8" style="background-color: #cfd5e1;border-radius: 10px;padding: 25px;">

          <div class="container" style="height: auto">
            <router-view></router-view>
          </div>

        </v-col>
        <v-col cols="2" style="padding-top: 0">
          <ListaAmigos />
        </v-col>

      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import UserCard from '../components/Card.vue';
import MenuApp from '../components/Menu.vue';
import ListaAmigos from '../components/ListaAmigos.vue';
import NavBar from '../components/NavBar.vue';

import { store } from '../store.js'

store.user.name = "VictorAugusto"
store.user.followers = "55k"
store.user.following = "128"
store.user.posts = "10"
store.user.email = "victor.augustobarros@gmail.com"
store.user.objetivos = 3

export default {
  name: 'HomePage',
  data: function () {
    return {
      store
    }
  },
  components: {
    UserCard,
    MenuApp,
    ListaAmigos,
    NavBar
  }
}

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

