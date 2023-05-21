<template>
    <v-autocomplete variant="outlined" v-model="searchText" :items="filteredUsers" label="Usuários" @input="searchUsers"
        @change="handleItemClick(searchText)"></v-autocomplete>
</template>
  
<script>
import { mapActions } from 'vuex';

export default {
    name: "SearchBox",
    data() {
        return {
            searchText: "",
            usernames: [],
            filteredUsers: []
        };
    },
    async mounted() {
        this.usernames = await this.GetAllUsernames()
    },
    methods: {
        ...mapActions("user", ["GetAllUsernames"]),
        searchUsers() {
            this.filteredUsers = this.usernames.filter(username => {
                return username.toLowerCase();
            });
        },
        handleItemClick(username) {
            if (!username) {
                return
            }
            this.$router.push({ name: 'home.perfil', params: { username: username } });
        }
    }
};
</script>