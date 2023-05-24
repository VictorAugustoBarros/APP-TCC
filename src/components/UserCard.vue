<template v-if="load">
    <v-card style="background-color: #cfd5e1;" class="mx-auto" :width="cardWidth" :height="cardHeight">
        <template v-slot:title>
            <v-badge dot color="green" style="float: left;">
                <v-avatar :image="this.user.userIcon" size=35></v-avatar>
            </v-badge>
            <span style="font-size: 15px; padding-left: 20px;">{{ this.user.username }}</span><br>
        </template>

        <v-card-text>
            <v-row padding="0">
                <v-card-text style="text-align:center;">
                    <v-row>
                        <v-col style="padding-bottom: 0">
                            <p class="font-card-number">{{ this.qntObjetivos }}</p>
                        </v-col>
                        <v-col style="padding-bottom: 0">
                            <p class="font-card-number">{{ this.qntObjetivosConcluidos }}</p>
                        </v-col>
                        <v-col style="padding-bottom: 0">
                            <p class="font-card-number">{{ this.qntAmigos }}</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col style="padding-top: 0">
                            <span class="font-card-text">Objetivos</span>
                        </v-col>
                        <v-col style="padding-top: 0">
                            <span class="font-card-text">Concluídos</span>
                        </v-col>
                        <v-col style="padding-top: 0">
                            <span class="font-card-text">Amigos</span>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-row>
        </v-card-text>


    </v-card>
</template>
  
<script>
import userStore from '@/store/userStore';
import { getUserCardInfo } from '@/services/info'

export default {
    name: 'UserCard',
    data() {
        return {
            qntObjetivos: 0,
            qntObjetivosConcluidos: 0,
            qntAmigos: 0,
            user: userStore().getUser,
            load: false
        }
    },
    props: {
        width: {
            type: Number
        },
        height: {
            type: Number
        }
    },
    computed: {
        cardWidth() {
            return `${this.width}px`
        },
        cardHeight() {
            return `${this.height}px`
        },
    },
    async beforeMount() {        
        const data = await getUserCardInfo()

        this.qntObjetivos = data.qntObjetivos
        this.qntObjetivosConcluidos = data.qntObjetivosConcluidos
        this.qntAmigos = data.qntAmigos

        this.load = true
    }
}
</script>

<style>
.no-padding {
    padding: 0;
}

.font-card-text {
    font-size: 10px;
}

.font-card-number {
    font-size: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>