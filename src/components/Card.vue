<template>
    <v-card style="background-color: #cfd5e1;" class="mx-auto" :width="cardWidth" :height="cardHeight">
        <template v-slot:title>
            <v-badge dot color="green" style="float: left;">
                <v-avatar image="images/user-icon.png" size=35></v-avatar>
            </v-badge>
            <span style="font-size: 15px; padding-left: 20px;">{{ store.state.user.name }}</span><br>
        </template>
        
        <v-card-text>
            <v-row padding="0">
            <v-card-text style="text-align:center;">
                <v-row>
                    <v-col style="padding-bottom: 0">
                        <p class="font-card-number">{{ store.state.user.followers }}</p>
                    </v-col>
                    <v-col style="padding-bottom: 0">
                        <p class="font-card-number">{{ store.state.user.following }}</p>
                    </v-col>
                    <v-col style="padding-bottom: 0">
                        <p class="font-card-number">{{ store.state.user.posts }}</p>
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
                        <span class="font-card-text">Posts</span>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-row>
        </v-card-text>

        
    </v-card>
</template>
  
<script>
import store from '../store/store'

export default {
    name: 'UserCard',
    data: function () {
        return {
            store
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
</style>