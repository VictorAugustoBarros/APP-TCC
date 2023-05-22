<template>
    <v-card style="background-color: #cfd5e1;" class="mx-auto" :width="cardWidth" :height="cardHeight">
        <template v-slot:title>
            <v-badge dot color="green" style="float: left;">
                <v-avatar :image="this.user.user_icon" size=35></v-avatar>
            </v-badge>
            <span style="font-size: 15px; padding-left: 20px;">{{ this.user.username }}</span><br>
        </template>

        <v-card-text>
            <v-row padding="0">
                <v-card-text style="text-align:center;">
                    <v-row>
                        <v-col style="padding-bottom: 0">
                            <p class="font-card-number">{{ this.user.followers }}</p>
                        </v-col>
                        <v-col style="padding-bottom: 0">
                            <p class="font-card-number">{{ this.user.following }}</p>
                        </v-col>
                        <v-col style="padding-bottom: 0">
                            <p class="font-card-number">{{ this.amigos.length }}</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col style="padding-top: 0">
                            <span class="font-card-text">Seguidores</span>
                        </v-col>
                        <v-col style="padding-top: 0">
                            <span class="font-card-text">Seguindo</span>
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

export default {
    name: 'UserCard',
    data() {
        return {
            user : null,
            amigos : null
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
    beforeMount() {
        const user = userStore()
        this.user = user.getUser
        this.amigos = user.getAmigos
    },
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
</style>