
<template>
  <v-container style="overflow: auto" class="container" fluid>
    <div style="position: relative;">
      <v-row style="background-color: gray;height: 25vh;border-radius: 13px;">
        <v-img
              src="images/foto-capa.jpg"
              height="25vh"
              cover
              class="bg-grey-lighten-2"
            ></v-img>
      </v-row>
      <v-row style="height: 10vh;">
        <v-avatar image="images/user-icon.png" size=130 style="position: absolute;top: 60%;left: 5%;"></v-avatar>
        <h1 style="position: absolute;left: 17%;">{{ store.user.name }}</h1>
      </v-row>
    </div>
    
    <div style="padding-top: 50px;">
      <v-row style="height: 15vh;background-color: red;border-radius: 13px;">
      
      </v-row>
      <v-row style="height: 2vh"></v-row>
      <v-row style="height: 15vh;background-color: green;border-radius: 13px;">
  
      </v-row>
      <v-row style="height: 2vh"></v-row>
      <v-row style="height: 15vh;background-color: yellow;border-radius: 13px;">
  
      </v-row>
    </div>
    

  </v-container>
</template>

<script>
import { store } from '../store.js'



export default {
  name: 'Perfilpage',
  data: function () {
    return {
      store
    }
  },
  mounted() {
    store.page.title = "Perfil"
  }
}

</script>