import * as types from './mutation-types'

export default {
  [types.SET_CRITERIO](state, payload) {
    state.criterios = payload
  },
}