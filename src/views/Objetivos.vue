<template>
  <v-app>
    <v-container class="container" fluid>
      <v-row class="navbar" style="height: 10vh;">
        <v-col class="center-element" cols="2">
          <v-img :width="60" :height="60" src="images/Logo.png">
          </v-img>
        </v-col>
        <v-col cols="8" style="background-color: turquoise;"></v-col>
        <v-col cols="2" style="background-color: blue;"></v-col>
      </v-row>
      <v-row style="height: 85vh;">
        <v-col cols="2">
          <UserCard :width="200" />
        </v-col>
        <v-col cols="8" style="background-color: purple;"></v-col>
        <v-col cols="2" style="background-color: green;"></v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import UserCard from '../components/Card.vue';
import MenuApp from '../components/Menu.vue';

export default {
  name: 'Home',
  components: {
    UserCard,
    MenuApp,
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