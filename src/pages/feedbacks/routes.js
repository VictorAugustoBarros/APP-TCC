export default [
    {
        path: '/feedbacks',
        name: 'feedbacks',
        component: () => import('./Feedbacks'),
    },
    {
        path: '/feedbacks/detalhes/:objetivoKey',
        name: 'feedback.detalhes',
        component: () => import('./FeedbacksEdit')
    }
]