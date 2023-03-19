<template>
    <v-card style="background-color: lightgray" class="mx-auto" :width="cardWidth">
        <v-card-title>
            <v-row style="height: 50px;">
                <v-col>
                    <v-avatar image="images/user-icon.png" size=30></v-avatar>
                </v-col>
                <v-col>
                    <span style="font-size: 15px">{{ userName }}</span>
                </v-col>
                <v-col />
            </v-row>
        </v-card-title>

        <v-row padding="0">
            <v-card-text style="text-align:center;padding-top: 15px">
                <v-row>
                    <v-col style="padding-bottom: 0">
                        <p class="font-card-number">{{ followers }}</p>
                    </v-col>
                    <v-col style="padding-bottom: 0">
                        <p class="font-card-number">{{ following }}</p>
                    </v-col>
                    <v-col style="padding-bottom: 0">
                        <p class="font-card-number">{{ posts }}</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col style="padding-top: 0">
                        <span class="font-card-text" >Follower</span>
                    </v-col>
                    <v-col style="padding-top: 0">
                        <span class="font-card-text">Following</span>
                    </v-col>
                    <v-col style="padding-top: 0">
                        <span class="font-card-text">Posts</span>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-row>
    </v-card>
</template>
  
<script>
export default {
    name: 'UserCard',
    props: {
        width: {
            type: Number,
            default: 400
        },
        userName: {
            type: String,
            default: '@UserName'
        },
        followers: {
            type: String,
            default: '5.5k'
        },
        following: {
            type: String,
            default: '568'
        },
        posts: {
            type: String,
            default: '5.5k'
        },
        image: {
            type: String,
            default: ""
        }
    },
    computed: {
        cardWidth() {
            return `${this.width}px`
        },
        cardUserName() {
            return this.userName;
        },
        cardfollowers() {
            return this.followers
        },
        cardfollowing() {
            return this.following
        },
        cardposts() {
            return this.posts
        }

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