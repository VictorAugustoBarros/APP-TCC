import {API_HOST, ALLOW_ORIGIN} from '@/http/constants'
import axios from 'axios';

import authStore from "@/store/authStore";

export const getEvolucaoObjetivos = async () => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/evolucao/objetivos`,
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

export const getEvolucaoAmizades = async () => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/evolucao/amizades`,
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

export const getEvolucaoFeedbacks = async () => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/evolucao/feedbacks`,
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

export const getEvolucaoFeedbacksObjetivo = async (objetivoKey) => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/evolucao/feedbacks/${objetivoKey}`,
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