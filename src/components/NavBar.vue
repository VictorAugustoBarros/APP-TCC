<template>
    <v-row style="height: 100px;">
        <v-col style="display: flex;align-items: center;justify-content: center;" cols="2">
            <v-img :width="60" :height="60" src="@/assets/Logo.png">
            </v-img>
        </v-col>
        <v-col cols="8" style="display:flex;align-items: center;">
            <v-row>
                <v-col style="display:flex;align-items: center;">
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
                <v-col style="display: flex;align-items: center;justify-content: center">
                    <NotificacoesDropdown />
                </v-col>
                <v-col style="display: flex;align-items: center;justify-content: center">
                    <NotificacoesAmizades />
                </v-col>
                <v-col style="display: flex;align-items: center;justify-content: center">
                    <AvatarDropdown />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import SearchBox from '@/components/Search';
import AvatarDropdown from '@/components/AvatarDropdown';
import NotificacoesDropdown from '@/components/Notificacoes';
import NotificacoesAmizades from '@/components/NotificacoesAmizades';

export default {
    name: "NavBar",
    data: function () {
        return {
        }
    },
    components: {
        AvatarDropdown,
        NotificacoesDropdown,
        NotificacoesAmizades,
        SearchBox
    }
}
</script>

<style>
#no-background-hover::before {
   background-color: transparent !important;
}
</style>