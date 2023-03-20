<template>
    <v-list>
        <router-link to="/">
            <v-list-item prepend-icon="mdi-account-multiple" title="Perfil" value="shared"></v-list-item>
        </router-link>
        <router-link to="/feed">
            <v-list-item prepend-icon="mdi-folder" title="Feed" value="shared"></v-list-item>
        </router-link>
        <router-link to="/objetivos">
            <v-list-item prepend-icon="mdi-calendar" title="Objetivos" value="shared"></v-list-item>
        </router-link>
        <router-link to="/criteriosConfig">
            <v-list-item prepend-icon="mdi-calendar" title="Configuraçao Criterios" value="shared"></v-list-item>
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