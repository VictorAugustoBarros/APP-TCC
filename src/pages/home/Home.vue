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
</template>

<script>
import UserCard from "@/components/UserCard";
import MenuApp from "@/components/Menu";
import ListaAmigos from "@/components/ListaAmigos";
import NavBar from "@/components/NavBar";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomePage",
  data: function () {
    return {

    };
  },
  components: {
    UserCard,
    MenuApp,
    ListaAmigos,
    NavBar,
  },
  methods: {
    ...mapGetters("auth", ["getToken"]),    
    ...mapActions("user", ["GetUserData"]),
    userData() {
      let token = this.getToken();
      this.GetUserData({ token });
    }
  },
  mounted() {
    this.userData();
    // this.$router.push({ name: 'home.perfil' });
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

