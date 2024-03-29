import {API_HOST, ALLOW_ORIGIN} from '@/http/constants'
import axios from 'axios';

import authStore from "@/store/authStore";

export const authLogin = async (payload) => {
    const data = {
        "email": payload.email,
        "password": payload.password,
    }
    const auth = authStore()

    return await axios.post(`${API_HOST}/auth/login`,
        data,
        {
            headers: {
                "Access-Control-Allow-Origin": ALLOW_ORIGIN,
            }
        })
        .then((response) => {            
            auth.setFromLogin(true);
            auth.addToken(response.data.token);
            return response.data
        })
        .catch((error) => {
            return {
                "error": error.message
            }
        });

}

export const authVerifyToken = async () => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/auth/verify`,
        {
            headers: {
                "Authorization": auth.getToken,
                "Access-Control-Allow-Origin": ALLOW_ORIGIN,
            }
        })
        .then((response) => {
            if (response.data.error) {
                return false;
            }
            return true;
        })
        .catch((error) => {
            return {
                "error": error.message
            }
        });
}

