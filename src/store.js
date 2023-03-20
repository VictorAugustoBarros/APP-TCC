// store.js
import { reactive } from 'vue'

export const store = reactive({
    user: {
        name: null,
        email: null,
        followers: null,
        following: null,
        posts: null,
        objetivos: null
    },
    page: {
        title: null
    }
})