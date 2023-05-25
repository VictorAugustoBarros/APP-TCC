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
                :qntObjetivosConcluidos="this.card.qntObjetivosConcluidos" :qntAmigos="this.card.qntAmigos" />
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
                <ListaAmigos />
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
        qntAmigos: 0
      }
    }
  },
  beforeCreate() {
    const auth = authStore()
    if (auth.getToken && auth.getfromLogin){      
      this.$router.push({"path": "/feed"})
    }
  },
  mounted() {
    this.loadCard()
  },
  created() {
    bus.on('update-card', async () => {
      this.loadCard()
    });
  },
  methods: {
    async loadCard(){
      const data = await getUserCardInfo()
      this.card.qntObjetivos = data.qntObjetivos
      this.card.qntObjetivosConcluidos = data.qntObjetivosConcluidos
      this.card.qntAmigos = data.qntAmigos
    }
  },
};
</script>