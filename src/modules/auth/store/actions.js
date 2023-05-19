import axios from 'axios';
import API_HOST from '@/http/constants'

import * as storage from '../storage'
import * as types from './mutation-types'


export const ActionDoLogin = async ({ dispatch }, payload) => {
  const data = {
    "email": payload.email,
    "password": payload.password,
  }

  await axios.post(`${API_HOST}/auth/login`,
    data,
    {
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
      }
    })
    .then((response) => {
      console.log(response);
      if (response.data.error){
        console.log(response.data.error)
        dispatch('ActionSetErrorLogin', response.data.error);

      }else {
        dispatch('ActionSetUser', response.data.user);
        dispatch('ActionSetToken', response.data.token);
        console.log("Success")
      }
    })
    .catch((error) => {
      console.log(error.response)
    });

}

export const ActionCheckToken = ({ dispatch }) => {
  axios.get(`${API_HOST}/users/verify`,
    {
      headers: {
        "Authorization": storage.getLocalToken(),
        "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
      }
    })
    .then((response) => {
      console.log(response)
      if (response) {
        dispatch('ActionLoadSession')

      } else {
        dispatch('ActionSignOut')
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload)
}

export const ActionSetErrorLogin = ({ commit }, payload) => {
  commit("errorMessageLogin", payload)
}

export const ActionSetToken = ({ commit }, payload) => {
  storage.setLocalToken(payload)
  commit(types.SET_TOKEN, payload)
}

export const ActionSignOut = ({ dispatch }) => {
  storage.deleteLocalToken()
  dispatch('ActionSetUser', {})
  dispatch('ActionSetToken', '')
}