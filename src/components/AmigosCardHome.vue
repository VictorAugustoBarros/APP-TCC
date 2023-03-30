<template>
    <v-card class="mx-auto" variant="none">
        <v-card-title>
            <v-row style="height: 50px; display: flex;justify-content: center;">
                <v-col flex-grow="0">
                    <v-badge dot :color="userActive">
                        <v-avatar image="images/user-icon.png" size=30></v-avatar>
                    </v-badge>
                </v-col>                
                <v-col >
                    <span style="font-size: 15px;">{{ userName }} </span>                
                </v-col>                
                <v-col>
                    <!-- <font-awesome-icon style="float: right" icon="comment-dots" /> -->
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