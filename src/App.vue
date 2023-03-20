<template>
  <title>{{ store.page.title }}</title>
  <v-app>
    <v-container class="container" fluid>
      <v-row class="navbar" style="height: 13vh;">
        <v-col class="center-element" cols="2">
          <v-img :width="60" :height="60" src="images/Logo.png">
          </v-img>
        </v-col>
        <v-col cols="8" style="display:flex;align-items: center;">
          <v-row>
            <v-col style="display:flex;align-items: center;">
              <h2 style="padding-left: 70px;">{{ store.page.title }}</h2>
            </v-col>
            <v-col>
              <SearchBox />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2" style="display:flex;align-items: center;">
          <v-row>
            <v-col class="center-element" style="height: 10vh">
              <v-btn icon size="40">
                <v-badge content="5" color="error">
                  <v-icon size=25>mdi-message</v-icon>
                </v-badge>
              </v-btn>
            </v-col>
            <v-col class="center-element" style="height: 10vh">
              <v-btn icon size="40">
                <v-badge content="5" color="error">
                  <v-icon>mdi-bell-outline</v-icon>
                </v-badge>
              </v-btn>
            </v-col>
            <v-col class="center-element" style="height: 10vh">

              <AvatarDropdown />

            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row style="height: 75vh;">
        <v-col cols="2" style="padding-top: 0">
          <UserCard :width=250 :height=120 />
          <br>
          <MenuApp />

        </v-col>
        <v-col cols="8" style="background-color: lightgray;border-radius: 10px;padding: 25px">

          <div class="container" style="height: 80vh;overflow: auto">
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
import UserCard from './components/Card.vue';
import MenuApp from './components/Menu.vue';
import SearchBox from './components/Search.vue';
import AvatarDropdown from './components/AvatarDropdown.vue';
import ListaAmigos from './components/ListaAmigos.vue';
import ObjetivosPage from './components/Objetivos.vue';

import { store } from './store.js'

store.user.name = "VictorAugusto"
store.user.followers = "55k"
store.user.following = "128"
store.user.posts = "10"
store.user.email = "victor.augustobarros@gmail.com"
store.user.objetivos = 3

export default {
  name: 'Home',
  data: function () {
    return {
      store
    }
  },
  components: {
    UserCard,
    MenuApp,
    SearchBox,
    AvatarDropdown,
    ListaAmigos,
    ObjetivosPage
  }
}

</script>

<style>
.center-element {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar {
  height: 100px;
}
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

body {
  background: whitesmoke;
}

</style>

