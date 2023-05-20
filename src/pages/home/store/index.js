import * as actions from './actions'

export default {
    state: {
        user: {
            key: "",
            name: "",
            username: "",
            followers: "",
            following: ""
        },
        amigos: []
    },
    actions: actions,
    namespaced: true
}