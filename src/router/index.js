import routes from './routes'

import beforeEach from './beforeEach'


import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach(beforeEach)

export default router