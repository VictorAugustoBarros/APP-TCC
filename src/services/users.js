import API_HOST from '@/http/constants'
import axios from 'axios';

import authStore from "@/store/authStore";
import userStore from "@/store/userStore";

export const ActionRegisterUser = async (payload) => {
    return await axios.post(`${API_HOST}/users`,
        payload,
        {
            headers: {
                "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
            }
        })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error("Erro:", error);
        });
}

export const GetUserData = async () => {
    const auth = authStore()
    const user = userStore()

    return await axios.get(`${API_HOST}/users`,
        {
            headers: {
                "Authorization": auth.getToken,
                "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
            }
        })
        .then((response) => {
            user.setUser(response.data)
            return response.data
        })
        .catch(() => { });
}



export const GetAllUsernames = async () => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/usernames`,
        {
            headers: {
                "Authorization": auth.getToken,
                "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
            }
        })
        .then((response) => {
            return response.data
        })
        .catch(() => { });
}

export const GetUserByUsername = async (username) => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/usernames/${username}`,
        {
            headers: {
                "Authorization": auth.getToken,
                "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
            }
        })
        .then((response) => {
            return response.data
        })
        .catch(() => {});
}

