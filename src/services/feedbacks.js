import {API_HOST, ALLOW_ORIGIN} from '@/http/constants'
import axios from 'axios';

import authStore from "@/store/authStore";

export const generateFeedback = async (objetivo_key) => {
    const auth = authStore()

    return await axios.post(`${API_HOST}/feedbacks/generate`,
        {"key": objetivo_key},
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



export const getFeedbacks = async (objetivo_key) => {
    const auth = authStore()
    return await axios.get(`${API_HOST}/feedbacks/${objetivo_key}`,
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


export const cadastrarFeedbacks = async (payload) => {
    const auth = authStore()
    return await axios.post(`${API_HOST}/feedbacks`,
        payload,
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