<template>
  <v-row justify="center">
    <v-menu min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props" size="40">
          <v-badge icon="mdi-vuetify">
            <v-avatar :image="this.getUser().user_icon" size=40></v-avatar>
          </v-badge>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center">
            <h3> {{ this.getUser().name }} </h3>
            <p class="text-caption mt-1">
              {{ this.getUser().email }} 
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
import store from '@/store'
import { mapActions, mapGetters } from 'vuex';

import { useAuthStore } from "@/store/storage";

export default {
  name: "AvatarDropdown",
  data: () => ({
    store
  }),
  methods: {
    ...mapActions("auth", ["ActionSignOut"]),
    ...mapGetters("user", ["getUser"]),
    logout() {
      const auth = useAuthStore()
      auth.deleteToken()
      window.location.pathname = '/login';
    }
  }
}
</script>

