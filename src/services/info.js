import axios from 'axios';
import authStore from "@/store/authStore";
import { API_HOST, ALLOW_ORIGIN } from '@/http/constants'


export const getUserCardInfo = async () => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/info/user_card`, {
        headers: { "Authorization": auth.getToken, "Access-Control-Allow-Origin": ALLOW_ORIGIN }
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

export const getListaAmigosInfo = async () => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/info/lista_amigos`, {
        headers: { "Authorization": auth.getToken, "Access-Control-Allow-Origin": ALLOW_ORIGIN }
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

export const getUserPerfilInfo = async (username) => {
    const auth = authStore()

    return await axios.get(`${API_HOST}/info/user_perfil/${username}`, {
        headers: { "Authorization": auth.getToken, "Access-Control-Allow-Origin": ALLOW_ORIGIN }
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