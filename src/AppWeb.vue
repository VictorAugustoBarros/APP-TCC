<template>
  <div id="app">
    <div v-if="!this.auth.getToken">
      <app-login />
    </div>

    <div v-else>
      <v-app style="background-color: #ededf2">
        <v-container class="container" fluid>
          <NavBar />

          <v-row>
            <v-col cols="2" style="padding-top: 0">
              <UserCard :width="250" :height="120" :qntObjetivos="this.card.qntObjetivos"
                :qntObjetivosConcluidos="this.card.qntObjetivosConcluidos" :qntAmigos="this.card.qntAmigos"
                :username="this.card.username" :userIcon="this.card.userIcon" />
              <br />
              <MenuApp />
            </v-col>
            <v-col cols="8" style="background-color: #cfd5e1; border-radius: 10px; padding: 25px">
              <div class="container" style="height: auto">
                <router-view />
              </div>
            </v-col>
            <v-col cols="2" style="padding-top: 0">
              <div style="overflow: auto; height: 85vh">
                <ListaAmigos :amigos="this.amigos" />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-app>
    </div>
  </div>
</template>

<script>
import authStore from "@/store/authStore";
import userStore from "@/store/userStore";

import LoginPage from "./pages/login/Login";
import UserCard from "@/components/UserCard";
import ListaAmigos from "@/components/ListaAmigos";
import NavBar from "@/components/NavBar";
import MenuApp from "@/components/Menu";

import bus from './eventBus';

import { getUserCardInfo } from '@/services/info'
import { getListaAmigosInfo } from '@/services/info'


export default {
  name: "App",
  components: {
    'app-login': LoginPage,
    UserCard,
    ListaAmigos,
    NavBar,
    MenuApp,
  },
  data() {
    return {
      auth: authStore(),
      user: userStore(),

      loadLogin: true,

      card: {
        qntObjetivos: 0,
        qntObjetivosConcluidos: 0,
        qntAmigos: 0,
        username: null,
        userIcon: null
      },

      amigos: []      
    }
  },
  async created() {
    bus.on('update-card', async () => {
      const data = await getUserCardInfo()
      const user_info = this.user.getUser

      this.card.qntObjetivos = data.qntObjetivos
      this.card.qntObjetivosConcluidos = data.qntObjetivosConcluidos
      this.card.qntAmigos = data.qntAmigos
      this.card.username = user_info.username
      this.card.userIcon = user_info.userIcon
    });

    bus.on('update-amigos', async () => {
      const amigos = await getListaAmigosInfo()
      if (!amigos.error){
          this.amigos = amigos
      }
    });

    bus.emit('update-card', {});
    bus.emit('update-amigos', {});
    
  },
  beforeUnmount() {
    bus.off('update-card');
    bus.off('update-amigos');
  },
};
</script>