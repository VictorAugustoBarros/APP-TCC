import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const objetivoStore = defineStore({
    id: 'objetivo',
    state: () => ({
        objetivos: useStorage('objetivos', Object),
    }),
    getters: {
        getObjetivos() {
            return this.objetivos
        },
        getObjetivosID(id) {
            return this.objetivos[id]
        }
    },
    actions: {
        setObjetivos(new_objetivos) {
            this.objetivos = new_objetivos
        },
        deleteAll(){
            this.objetivos = null
        }
    },
})

export default objetivoStore;