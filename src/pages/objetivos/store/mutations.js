import * as types from './mutation-types'

export default {
  [types.SET_OBJETIVOS](state, payload) {
    state.objetivos = payload
  }
}