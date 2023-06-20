import {API_HOST, ALLOW_ORIGIN} from '@/http/constants'
import axios from 'axios';

import authStore from "@/store/authStore";

export const enviarRecuperacaoSenha = async (email) => {

    return await axios.post(`${API_HOST}/recuperacao/enviar`,
        {"email": email},
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

export const validarHash = async (dados) => {

    return await axios.post(`${API_HOST}/recuperacao/validar/`,
        dados,
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


export const atualizarSenha = async (dados) => {

    return await axios.post(`${API_HOST}/recuperacao/atualizar/`,
        dados,
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
