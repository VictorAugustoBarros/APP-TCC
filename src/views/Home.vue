<template>
  <v-app>
    <v-container class="container" fluid>
      <v-row class="navbar" style="height: 10vh;">
        <v-col class="center-element" cols="2">
          <v-img :width="60" :height="60" src="images/Logo.png">
          </v-img>
        </v-col>
        <v-col cols="8">
          <v-row>
            <v-col>
              <v-row>
                <v-col></v-col>
                <v-col>
                  <h2>{{ pagename }}</h2>
                </v-col>
                <v-col></v-col>
              </v-row>
            </v-col>
            <v-col>
              <SearchBox />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
          <v-row>
            <v-col class="center-element" style="height: 10vh">
              <v-btn icon v-bind="props" size="40">
                <v-badge content="5" color="error">
                  <v-icon size=25>mdi-message</v-icon>
                </v-badge>
              </v-btn>
            </v-col>
            <v-col class="center-element" style="height: 10vh">
              <v-btn icon v-bind="props" size="40">
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
        <v-col cols="2">
          <br>
          <UserCard :width="250" :height="100" />
          <br><br>
          <MenuApp />
        </v-col>
        <v-col cols="8" style="background-color: lightgray;border-radius: 10px;padding: 50px">
          <ObjetivosPage />
        </v-col>
        <v-col cols="2">
          <ListaAmigos />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import UserCard from '../components/Card.vue';
import MenuApp from '../components/Menu.vue';
import SearchBox from '../components/Search.vue';
import AvatarDropdown from '../components/AvatarDropdown.vue';
import ListaAmigos from '../components/ListaAmigos.vue';
import ObjetivosPage from '../components/Objetivos.vue';

export default {
  name: 'Home',
  components: {
    UserCard,
    MenuApp,
    SearchBox,
    AvatarDropdown,
    ListaAmigos,
    ObjetivosPage
  },
  props: {
    "pagename": {
      type: String,
      default: "Nome da Pagina",
    }
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
</style>