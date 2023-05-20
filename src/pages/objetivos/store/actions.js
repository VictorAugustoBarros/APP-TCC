import API_HOST from '@/http/constants'
import axios from 'axios';
import * as types from './mutation-types'

export const LoadObjetivos = async ({ dispatch }, { token }) => {
    return await axios.get(`${API_HOST}/objetivos`,
        {
            headers: {
                "token": token,
                "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
            }
        })
        .then((response) => {
            dispatch('ActionSetObjetivos', response.data.objetivos);
        })
        .catch(() => { });
}

export const CreateObjetivo = async ({ commit }, { payload, token }) => {

    return await axios.post(`${API_HOST}/objetivos`,
        payload,
        {
            headers: {
                "token": token,
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
            return {
                "success": true
            }
        })
        .catch(() => { });
}


export const ActionSetObjetivos = ({ commit }, objetivos) => {
    commit(types.SET_OBJETIVOS, objetivos);
}