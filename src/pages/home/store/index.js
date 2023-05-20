import mutations from './mutations'
import state from './state'

import * as actions from './actions'
import * as getters from './getters'

export default {
    state: state,
    actions: actions,
    getters: getters,
    mutations: mutations,
    namespaced: true
}