import {API_HOST, ALLOW_ORIGIN} from '@/http/constants'
import axios from 'axios';

import authStore from "@/store/authStore";
import userStore from "@/store/userStore";

export const GetUserAmigos = async () => {
    const auth = authStore()
    const user = userStore()
    

    return await axios.get(`${API_HOST}/amigos`,
        {
            headers: {
                "Authorization": auth.getToken,
                "Access-Control-Allow-Origin": ALLOW_ORIGIN,
            }
        })
        .then((response) => {
            user.setAmigos(response.data)
            return response.data
        })
        .catch((error) => {
            return {
                "error": error.message
            }
        });
}

export const adicionarAmizade = async (username) => {
    const auth = authStore()

    return await axios.post(`${API_HOST}/amigos`,
        {"username": username},
        {
            headers: {
                "Authorization": auth.getToken,
                "Access-Control-Allow-Origin": ALLOW_ORIGIN,
            }
        })
        .then((response) => {
            if (response.data.error){
                return false
            }
            return true
        })
        .catch((error) => {
            return {
                "error": error.message
            }
        });
}

