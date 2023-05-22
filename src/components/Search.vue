<template>
    <v-autocomplete variant="outlined" v-model="searchText" :items="filteredUsers" label="Usuários" @input="searchUsers"
        @change="handleItemClick(searchText)"></v-autocomplete>
</template>
  
<script>
import {GetAllUsernames} from '@/services/users'

export default {
    name: "SearchBox",
    data() {
        return {
            searchText: "",
            usernames: [],
            filteredUsers: []
        };
    },
    async beforeMount() {
        const response = await GetAllUsernames()
        this.usernames = response
    },
    methods: {
        searchUsers() {
            this.filteredUsers = this.usernames.filter(username => {
                return username.toLowerCase();
            });
        },
        handleItemClick(username) {
            if (!username) {
                return
            }
            
            this.$router.push({ name: 'perfil', params: { username: username } });
        }
    }
};
</script>