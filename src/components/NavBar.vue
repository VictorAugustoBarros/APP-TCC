<template>
    <v-row style="height: 13vh;height: 100px;">
        <v-col style="display: flex;align-items: center;justify-content: center;" cols="2">
            <v-img :width="60" :height="60" src="images/Logo.png">
            </v-img>
        </v-col>
        <v-col cols="8" style="display:flex;align-items: center;">
            <v-row>
                <v-col style="display:flex;align-items: center;">
                    <h2 style="padding-left: 70px;">{{ store.page.title }}</h2>
                </v-col>
                <v-col>
                </v-col>
                <v-col>
                    <SearchBox />
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="2" style="display:flex;align-items: center;">
            <v-row>
                <v-col style="display: flex;align-items: center;justify-content: center;height: 10vh">
                    <v-btn icon size="40" variant="none">
                        <v-badge content="5" color="error">
                            <v-icon size=25>mdi-message</v-icon>
                        </v-badge>
                    </v-btn>
                </v-col>
                <v-col style="display: flex;align-items: center;justify-content: center;height: 10vh">
                    <v-btn icon variant="none">
                        <v-badge content="5" color="error">
                            <v-icon>mdi-bell-outline</v-icon>
                        </v-badge>
                    </v-btn>
                </v-col>
                <v-col style="display: flex;align-items: center;justify-content: center;height: 10vh">

                    <AvatarDropdown />

                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import { store } from '../store.js'
import SearchBox from '../components/Search.vue';

import AvatarDropdown from '../components/AvatarDropdown.vue';

export default {
    name: "NavBar",
    data: function () {
        return {
            store
        }
    },
    components: {
        AvatarDropdown,
        SearchBox
    }
}
</script>

<style>
#no-background-hover::before {
   background-color: transparent !important;
}
</style>