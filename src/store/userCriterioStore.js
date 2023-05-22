import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const userCriterioStore = defineStore({
    id: 'userCriterio',
    state: () => ({
        criterios: useStorage('criterios', Object),
    }),
    getters: {
        getCriterios() {
            return this.criterios
        },
        hasCriterio() {
            return Object.keys(this.criterios).length > 0 ? true : false;
        }
    },
    actions: {
        setCriterios(new_criterios) {
            this.criterios = new_criterios
        },
        deleteAll(){
            this.criterios = null
        }
    },
})

export default userCriterioStore;