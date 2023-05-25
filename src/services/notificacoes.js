import { API_HOST, ALLOW_ORIGIN } from '@/http/constants'
import axios from 'axios';

import authStore from '@/store/authStore';

export const sendNotificacao = async (username) => {
    const auth = authStore()

    return await axios.post(`${API_HOST}/notificacao/amizade`,
        {
            "username": username
        },
        {
            headers: { "Authorization": auth.getToken, "Access-Control-Allow-Origin": ALLOW_ORIGIN, }
        })
        .then((response) => {
            console.log(response.data);
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

    return await axios.get(`${API_HOST}/notificacao/amizade`,
        {
            headers: { "Authorization": auth.getToken, "Access-Control-Allow-Origin": ALLOW_ORIGIN, }
        })
        .then((response) => {
            console.log(response.data);
            return response.data
        })
        .catch((error) => {
            return {
                "error": error.message
            }
        });
}
