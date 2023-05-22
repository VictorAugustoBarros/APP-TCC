import API_HOST from '@/http/constants'
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
                "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
            }
        })
        .then((response) => {
            user.setAmigos(response.data)
            return response.data
        })
        .catch(() => { });
}

export const solicitarAmizade = async (payload) => {
    const auth = authStore()

    return await axios.post(`${API_HOST}/amigos`,
        payload,
        {
            headers: {
                "Authorization": auth.getToken,
                "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
            }
        })
        .then((response) => {
            console.log(response.data);
            if (response.data.error){
                return false
            }
            return true
        })
        .catch(() => {});
}

