import {API_HOST, ALLOW_ORIGIN} from '@/http/constants'
import axios from 'axios';

import authStore from "@/store/authStore";

export const getObjetivo = async (objetivo_key) => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/objetivos/${objetivo_key}`,
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

export const LoadObjetivos = async () => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/objetivos`,
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

export const EditObjetivo = async (payload) => {
    const auth = authStore()

    return await axios.put(`${API_HOST}/objetivos`,
        payload,
        {
            headers: {
                "Authorization": auth.getToken,
                "Access-Control-Allow-Origin": ALLOW_ORIGIN,
            }
        })
        .then((response) => {
            if (response.data.success){
                return true
            }
            return false
        })
        .catch((error) => {
            return {
                "error": error.message
            }
        });
}

export const CreateObjetivo = async (payload) => {
    const auth = authStore()

    return await axios.post(`${API_HOST}/objetivos`,
        payload,
        {
            headers: {
                "Authorization": auth.getToken,
                "Access-Control-Allow-Origin": ALLOW_ORIGIN,
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
        .catch((error) => {
            return {
                "error": error.message
            }
        });
}