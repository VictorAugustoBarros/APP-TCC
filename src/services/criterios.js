import API_HOST from '@/http/constants'
import axios from 'axios';

import authStore from "@/store/authStore";

export const SetUserCriterios = async (payload) => {
    const auth = authStore()

    return await axios.post(`${API_HOST}/criterios/user`,
        payload.criterios,
        {
            headers: {
                "token": auth.getToken,
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

export const GetUserCriterios = async () => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/criterios`,
        {
            headers: {
                "token": auth.getToken,
                "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
            }
        })
        .then((response) => {
            if (!response.data.error) {
                return response.data.criterios
            }

            return false

        })
        .catch(() => { });
}