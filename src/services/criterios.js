import {API_HOST, ALLOW_ORIGIN} from '@/http/constants'
import axios from 'axios';

import authStore from "@/store/authStore";

export const SetUserCriterios = async (payload) => {
    const auth = authStore()

    return await axios.post(`${API_HOST}/user_criterios`,
        payload,
        {
            headers: {
                "Authorization": auth.getToken,
                "Access-Control-Allow-Origin": ALLOW_ORIGIN,
            }
        })
        .then((response) => {
        })
        .catch((error) => {
            return {
                "error": error.message
            }
        });
}

export const GetUserCriterios = async () => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/user_criterios`,
        {
            headers: {
                "Authorization": auth.getToken,
                "Access-Control-Allow-Origin": ALLOW_ORIGIN,
            }
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