<template>
    <v-list style="background-color: transparent">
        <router-link :to="'/perfil/' + user.username">
            <v-list-item prepend-icon="mdi-account-multiple" title="Perfil" ></v-list-item>
        </router-link>
        <router-link to="/objetivos">
            <v-list-item prepend-icon="mdi-calendar" title="Objetivos" ></v-list-item>
        </router-link>        
        <router-link to="/feedbacks">
            <v-list-item prepend-icon="mdi-account-arrow-up-outline" title="Feedbacks" ></v-list-item>
        </router-link>
        <router-link to="/evolucao">
            <v-list-item prepend-icon="mdi-chart-areaspline" title="Evolução"></v-list-item>
        </router-link>
        <router-link to="/criterios">
            <v-list-item prepend-icon="mdi-cog-outline" title="Criterios" ></v-list-item>
        </router-link>
    </v-list>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "MenuApp",
    computed: {
        ...mapState("user", ["user"])
    },
}
</script>

<style>
a {
    color: black;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
}

a:hover {
    color: blue;
}
</style>