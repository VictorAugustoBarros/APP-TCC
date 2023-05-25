import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const authStore = defineStore({
    id: 'auth',
    state: () => ({
        token: useStorage('token', String),
        fromLogin: useStorage('fromLogin', Boolean),
    }),
    getters: {
        getToken() {
            return this.token
        },
        getfromLogin() {
            return this.fromLogin
        }
    },
    actions: {
        addToken(new_token) {
            this.token = new_token
        },
        setFromLogin(new_value) {
            this.fromLogin = new_value
        },
        deleteAll() {
            this.token = null
        }
    },
})

export default authStore