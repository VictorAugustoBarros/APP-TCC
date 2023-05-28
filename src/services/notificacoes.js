import { API_HOST, ALLOW_ORIGIN } from '@/http/constants'
import axios from 'axios';

import authStore from '@/store/authStore';

export const sendNotificacao = async (payload) => {
    const auth = authStore()

    return await axios.post(`${API_HOST}/notificacao`,        
        payload,
        {
            headers: { "Authorization": auth.getToken, "Access-Control-Allow-Origin": ALLOW_ORIGIN, }
        })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return {
                "error": error.message
            }
        });
}
export const sendNotificacaoAmizade = async (username) => {
    const auth = authStore()

    return await axios.post(`${API_HOST}/notificacao/amizade`,
        {
            "username": username
        },
        {
            headers: { "Authorization": auth.getToken, "Access-Control-Allow-Origin": ALLOW_ORIGIN, }
        })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return {
                "error": error.message
            }
        });
}


export const getNotificacoes = async () => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/notificacao`,
        {
            headers: { "Authorization": auth.getToken, "Access-Control-Allow-Origin": ALLOW_ORIGIN, }
        })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return {
                "error": error.message
            }
        });
}


export const getFriendRequests = async () => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/notificacao/friend_request`,
        {
            headers: { "Authorization": auth.getToken, "Access-Control-Allow-Origin": ALLOW_ORIGIN, }
        })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return {
                "error": error.message
            }
        });
}


export const deleteFriendRequest = async (key) => {
    const auth = authStore()

    return await axios.delete(`${API_HOST}/notificacao/amizade/${key}`,
        {
            headers: { "Authorization": auth.getToken, "Access-Control-Allow-Origin": ALLOW_ORIGIN, }
        })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return {
                "error": error.message
            }
        });
}

export const limparNotificacoes = async () => {
    const auth = authStore()

    return await axios.delete(`${API_HOST}/notificacao`,
        {
            headers: { "Authorization": auth.getToken, "Access-Control-Allow-Origin": ALLOW_ORIGIN, }
        })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            return {
                "error": error.message
            }
        });
}