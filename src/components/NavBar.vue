<template>
    <v-row style="height: 100px;">
        <v-col style="display: flex;align-items: center;justify-content: center;" cols="2">
            <v-img src="@/assets/logo.png">
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
                    <NotificacoesDropdown :notificacoes="notificacoes" />
                </v-col>
                <v-col style="display: flex;align-items: center;justify-content: center">
                    <NotificacoesAmizades :friendRequests="notificacoesAmizades" />
                </v-col>
                <v-col style="display: flex;align-items: center;justify-content: center">
                    <AvatarDropdown />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import bus from '@/eventBus';


import SearchBox from '@/components/Search';
import AvatarDropdown from '@/components/AvatarDropdown';
import NotificacoesDropdown from '@/components/Notificacoes';
import NotificacoesAmizades from '@/components/NotificacoesAmizades';

import { getFriendRequests, getNotificacoes } from '@/services/notificacoes'

export default {
    name: "NavBar",
    data: function () {
        return {
            notificacoes: [],
            notificacoesAmizades: []
        }
    },
    components: {
        AvatarDropdown,
        NotificacoesDropdown,
        NotificacoesAmizades,
        SearchBox
    },
    created() {
        bus.on('update-notificacao-amizades', async () => {
            const friend_requests = await getFriendRequests()
            if (!friend_requests.error) {
                this.notificacoesAmizades = friend_requests
            }
        });

        bus.on('update-notificacao', async () => {
            const notificacoes = await getNotificacoes()
            if (!notificacoes.error) {
                this.notificacoes = notificacoes
            }
        });

        bus.emit('update-notificacao', {});
        bus.emit('update-notificacao-amizades', {});
    },
    beforeUnmount() {
    bus.off('update-notificacao-amizades');
    bus.off('update-notificacao');
  },
}
</script>

<style>
#no-background-hover::before {
    background-color: transparent !important;
}
</style>