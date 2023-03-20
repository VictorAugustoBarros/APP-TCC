<template>
    <v-card class="mx-auto">
        <v-card-title>
            <v-row style="height: 50px; text-align: center;">
                <v-col flex-grow="0">
                    <v-badge dot :color="userActive">
                        <v-avatar image="images/user-icon.png" size=30></v-avatar>
                    </v-badge>
                </v-col>                
                <v-col >
                    <span style="font-size: 15px;">{{ userName }} </span>
                </v-col>
                <v-col>
                    <v-icon style="float: right" size="extra-small" color="blue-darken-2" icon="mdi-message-text"></v-icon>
                </v-col>
            </v-row>
        </v-card-title>
        <v-row>
            <v-card-text></v-card-text>
        </v-row>
    </v-card>
</template>

<script>
export default {
    name: "AmigosCardHome",
    props: {
        color: {
            type: String,
            default: "red"
        },
        userName: {
            type: String,
            default: '@UserName'
        }
    }, computed: {
        userActive() {
            return this.color;
        }
    }
}
</script>