// store.js
import { reactive } from 'vue'

export const store = reactive({
    state: {
        isAuthenticated: false
    },
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
    },
    mutations: {
        setIsAuthenticated(state, isAuthenticated) {
            state.isAuthenticated = isAuthenticated;
        },
    },
})  