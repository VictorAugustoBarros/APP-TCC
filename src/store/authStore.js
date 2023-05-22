import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const authStore = defineStore({
    id: 'auth',
    state: () => ({
        token: useStorage('token', String),
    }),
    getters: {
        getToken() {
            return this.token
        }
    },
    actions: {
        addToken(new_token) {
            this.token = new_token
        },
        deleteAll() {
            this.token = null
        }
    },
})

export default authStore