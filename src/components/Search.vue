<template>
  <v-autocomplete class="custom-autocomplete" ref="autocomplete" v-if="loadComponent" variant="outlined" v-model="searchText" :items="usernames" label="Usuários">
  </v-autocomplete>
</template>
  
<script>
import bus from '@/eventBus';
import userStore from '@/store/userStore';
import { GetAllUsernames, GetUserByUsername } from '@/services/users';

export default {
  name: "SearchBox",
  data() {
    return {
      searchText: "",
      usernames: [],
      loadComponent: false
    };
  },
  async beforeCreate() {
    const response = await GetAllUsernames();
    if (!response.error){
      const usernames = response.filter(username => username !== userStore().getUsername);
      this.usernames = usernames;
    }
    
    this.loadComponent = true;
  },
  watch: {
    searchText(newUsername) {
      if (newUsername) {
        this.loadUserProfile(newUsername);
      }
    }
  },
  methods: {
    async loadUserProfile(username) {
      const user = await GetUserByUsername(username);
      if (!user.error) {
        this.searchText = null
        this.$refs.autocomplete.blur();
        this.$router.push({ name: "perfil", params: { username: user.username } });
        bus.emit('update-perfil', user.username);
      }
    },
    // handleItemClick() {
    //   this.loadUserProfile(this.searchText);
    // }
  }
};
</script>


<style >
.custom-autocomplete input {
  padding: 0%;
  /* padding-bottom: 25px; */
}

#input-12 {
  margin: 0%;
}
</style>