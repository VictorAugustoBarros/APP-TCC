import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'


export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        token: useStorage('token', String),
        page: useStorage('page', String),
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
        deleteToken() {
            this.token = null
        }
    },
})