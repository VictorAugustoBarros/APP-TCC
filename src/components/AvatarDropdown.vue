<template>
  <v-row justify="center">
    <v-menu min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props" size="40">
          <v-badge icon="mdi-vuetify">
            <v-avatar image="images/user-icon.png" size=40></v-avatar>
          </v-badge>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center">
            <v-avatar>
              <v-img src="images/user-icon.png" alt="John"></v-img>
            </v-avatar>
            <h3>{{ store.user.name }}</h3>
            <p class="text-caption mt-1">
              {{ store.user.email }}
            </p>
            <v-divider class="my-3"></v-divider>
            <v-btn rounded variant="text" @click="logout()">
              Logout
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-row>
</template>

<script>
import { store } from '../store.js'


export default {
  name: "AvatarDropdown",
  data: () => ({
    store
  }),
    methods: {
    logout() {
      store.state.isAuthenticated = false;
      console.log(store.state)
      window.location.pathname = '/';

    }
  }

}
</script>

