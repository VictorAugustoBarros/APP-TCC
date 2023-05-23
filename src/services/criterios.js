import {API_HOST, ALLOW_ORIGIN} from '@/http/constants'
import axios from 'axios';

import authStore from "@/store/authStore";
import userCriterioStore from '@/store/userCriterioStore';

export const SetUserCriterios = async (payload) => {
    const auth = authStore()
    const userCriterioStore = userCriterioStore()

    return await axios.post(`${API_HOST}/user_criterios`,
        payload,
        {
            headers: {
                "Authorization": auth.getToken,
                "Access-Control-Allow-Origin": ALLOW_ORIGIN,
            }
        })
        .then((response) => {
            userCriterioStore.setCriterios(response.data)
        })
        .catch(() => { });
}

export const GetUserCriterios = async () => {
    const auth = authStore()
    const userCriterioS = userCriterioStore()

    return await axios.get(`${API_HOST}/user_criterios`,
        {
            headers: {
                "Authorization": auth.getToken,
                "Access-Control-Allow-Origin": ALLOW_ORIGIN,
            }
        })
        .then((response) => {
            userCriterioS.setCriterios(response.data)
            return response.data
        })
        .catch(() => { });
}