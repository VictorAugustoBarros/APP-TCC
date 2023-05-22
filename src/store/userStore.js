import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const userStore = defineStore({
    id: 'user',
    state: () => ({
        user: useStorage('user', Object),
        amigos: useStorage('amigos', Array),
    }),
    getters: {
        getUser() {
            return this.user
        },
        getAmigos() {
            return this.amigos
        }
    },
    actions: {
        setUser(new_user) {
            this.user = new_user
        },
        setAmigos(new_amigos) {
            this.amigos = new_amigos
        },
        deleteAll() {
            this.user = null
            this.amigos = null
        }
    },
})

export default userStore;