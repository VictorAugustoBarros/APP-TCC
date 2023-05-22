<template>
  <v-row justify="center">
    <v-menu min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props" size="40">
          <v-badge icon="mdi-vuetify">
            <v-avatar :image="this.user.user_icon" size=40></v-avatar>
          </v-badge>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center">
            <h3> {{ this.user.username }} </h3>
            <p class="text-caption mt-1">
              {{ this.user.email }} 
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
import authStore from '@/store/authStore';
import userStore from '@/store/userStore';

export default {
  name: "AvatarDropdown",
  data: () => ({
    user: {}
  }),
  beforeMount() {
    const user = userStore()
    this.user = user.getUser
  },
  methods: {
    logout() {
      const authS = authStore()
      authS.deleteAll()

      this.$router.push({"name": "app"})
    }
  }
}
</script>

