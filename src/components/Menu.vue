<template>
    <v-list>
        <a href="/">
            <v-list-item prepend-icon="mdi-folder" title="Home" value="shared"></v-list-item>
        </a>
        <a href="/perfil">
            <v-list-item prepend-icon="mdi-account-multiple" title="Perfil" value="shared"></v-list-item>
        </a>
        <a href="/objetivos">
            <v-list-item prepend-icon="mdi-calendar" title="Objetivos" value="shared"></v-list-item>
        </a>
    </v-list>
</template>

<script>
import { mdiCalendar } from '@mdi/js';

export default {
    name: "MenuApp",
    data() {
        return {
            calendarIcon: mdiCalendar
        };
    }

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