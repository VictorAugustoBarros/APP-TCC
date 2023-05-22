import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const objetivoStore = defineStore({
    id: 'objetivo',
    state: () => ({
        objetivos: useStorage('objetivos', Array),
    }),
    getters: {
        getObjetivos() {
            return this.objetivos
        },
        getObjetivosID: (state) => (objetivoKey) => {
            return state.objetivos.objetivos.find(objetivo => objetivo.key === objetivoKey);
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