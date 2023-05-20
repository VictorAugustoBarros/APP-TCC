import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

export default {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
    namespaced: true
}