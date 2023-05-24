import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const userStore = defineStore({
    id: 'user',
    state: () => ({
        user: useStorage('user', Object),
        hasCriterios: useStorage('hasCriterios', Boolean),
    }),
    getters: {
        getUser() {
            return this.user
        },
        getHasCriterios() {
            return this.hasCriterios
        }
    },
    actions: {
        setUser(new_user) {
            this.user = new_user
        },
        setCriterios(new_value){
            this.hasCriterios = new_value
        },
        deleteAll() {
            this.user = null
        }
    },
})

export default userStore;