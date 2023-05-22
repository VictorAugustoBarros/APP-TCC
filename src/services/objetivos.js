import API_HOST from '@/http/constants'
import axios from 'axios';

import authStore from "@/store/authStore";
import objetivoStore from "@/store/objetivoStore";

export const LoadObjetivos = async () => {
    const auth = authStore()
    const objetivo = objetivoStore()

    return await axios.get(`${API_HOST}/objetivos`,
        {
            headers: {
                "Authorization": auth.getToken,
                "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
            }
        })
        .then((response) => {
            objetivo.setObjetivos(response.data)
            return response.data
        })
        .catch(() => { });
}

export const EditObjetivo = async (payload) => {
    const auth = authStore()

    return await axios.put(`${API_HOST}/objetivos`,
        payload,
        {
            headers: {
                "Authorization": auth.getToken,
                "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
            }
        })
        .then((response) => {
            if (response.data.success){
                return true
            }
            return false
        })
        .catch(() => { });
}

export const CreateObjetivo = async (payload) => {
    const auth = authStore()

    return await axios.post(`${API_HOST}/objetivos`,
        payload,
        {
            headers: {
                "Authorization": auth.getToken,
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