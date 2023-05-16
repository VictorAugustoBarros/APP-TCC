<template>
    <v-list style="background-color: transparent">
        <router-link to="/">
            <v-list-item prepend-icon="mdi-account-multiple" title="Perfil" ></v-list-item>
        </router-link>
        <router-link to="/objetivos">
            <v-list-item prepend-icon="mdi-calendar" title="Objetivos" ></v-list-item>
        </router-link>
        <router-link to="/criteriosConfig">
            <v-list-item prepend-icon="mdi-calendar" title="Configuraçao Criterios"></v-list-item>
        </router-link>
    </v-list>
</template>

<script>
export default {
    name: "MenuApp",

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