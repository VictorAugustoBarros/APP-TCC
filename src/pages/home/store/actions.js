import API_HOST from '@/http/constants'
import axios from 'axios';
import * as types from './mutation-types'

export const GetUserData = async ({ dispatch }, { token }) => {
    return await axios.get(`${API_HOST}/users`,
        {
            headers: {
                "token": token,
                "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
            }
        })
        .then((response) => {
            dispatch('ActionSetUser', response.data.user);
            dispatch('ActionSetAmigos', response.data.amigos);
        })
        .catch(() => { });
}

export const ActionSetUser = ({ commit }, user) => {
    commit(types.SET_USER, user);
}

export const ActionSetAmigos = ({ commit }, amigos) => {
    commit(types.SET_AMIGOS, amigos);
}