import {API_HOST, ALLOW_ORIGIN} from '@/http/constants'
import axios from 'axios';

import authStore from "@/store/authStore";
import userStore from "@/store/userStore";

export const ActionRegisterUser = async (payload) => {
    return await axios.post(`${API_HOST}/users`,
        payload,
        {
            headers: {
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

export const GetUserData = async () => {
    const auth = authStore()
    const user = userStore()

    return await axios.get(`${API_HOST}/users`,
        {
            headers: {
                "Authorization": auth.getToken,
                "Access-Control-Allow-Origin": ALLOW_ORIGIN,
            }
        })
        .then((response) => {
            if (!response.error){
                user.setUser(response.data.user)
                user.setCriterios(response.data.hasCriterios)
            }
            
            return response.data
        })
        .catch((error) => {
            return {
                "error": error.message
            }
        });
}



export const GetAllUsernames = async () => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/usernames`,
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

export const GetUserByUsername = async (username) => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/usernames/${username}`,
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

