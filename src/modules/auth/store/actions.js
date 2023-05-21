import axios from 'axios';
import API_HOST from '@/http/constants'

import * as storage from '../storage'
import * as types from './mutation-types'

import { useAuthStore } from "@/store/storage";

export const ActionDoLogin = async ({ dispatch }, payload) => {
  const data = {
    "email": payload.email,
    "password": payload.password,
  }

  return await axios.post(`${API_HOST}/auth/login`,
    data,
    {
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
      }
    })
    .then((response) => {
      if (response.data.error) {
        return {
          "success": false,
          "error": response.data.error
        }
      }

      const auth = useAuthStore()
      auth.addToken(response.data.token);
      
      return {
        "success": true,
      }
    })
    .catch(() => {});

}

export const ActionCheckToken = async ({ dispatch }) => {
  if (!storage.getLocalToken()) {
    return
  }

  return await axios.get(`${API_HOST}/auth/verify`,
    {
      headers: {
        "Authorization": storage.getLocalToken(),
        "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
      }
    })
    .then((response) => {
      if (response.data.error) {
        dispatch('ActionSignOut')
        return false;

      } else {
        return true;
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}

export const ActionSetToken = ({ commit }, token) => {
  localStorage.setItem('token', token);
  commit(types.SET_TOKEN, token);
}

export const ActionSignOut = ({ dispatch }) => {
  storage.deleteLocalToken()
  dispatch('auth/ActionSetToken', '')
}