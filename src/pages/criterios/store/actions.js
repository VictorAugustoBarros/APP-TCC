import API_HOST from '@/http/constants'
import * as types from './mutation-types'

import axios from 'axios';

export const SetUserCriterios = async ({ dispatch }, payload) => {
    return await axios.post(`${API_HOST}/criterios/user`,
        payload.criterios,
        {
            headers: {
                "token": payload.token,
                "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
            }
        })
        .then((response) => {
            if (!response.data.error) {
                return true
            }

            return false

        })
        .catch(() => { });
}

export const GetUserCriterios = async ({ dispatch }, payload) => {
    return await axios.get(`${API_HOST}/criterios`,
        {
            headers: {
                "token": payload.token,
                "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
            }
        })
        .then((response) => {
            if (!response.data.error) {
                dispatch('ActionSetCriterio', response.data.criterios);
                return response.data.criterios
            }

            return false

        })
        .catch(() => { });
}

export const ActionSetCriterio = ({ commit }, payload) => {
    commit(types.SET_CRITERIO, payload);
}