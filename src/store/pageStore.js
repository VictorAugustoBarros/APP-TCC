import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const pageStore = defineStore({
    id: 'page',
    state: () => ({
        page: useStorage('page', String),
    }),
    getters: {
        getPage() {
            return this.page
        }
    },
    actions: {
        setPage(new_page) {
            this.page = new_page
        },
        deletePage() {
            this.page = null;
        }
    },
})

export default pageStore