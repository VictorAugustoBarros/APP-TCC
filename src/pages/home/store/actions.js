import axios from 'axios';
import API_HOST from '@/http/constants'
import store from '@/store'

export const GetUserData = async () => {
    console.log(store.getters["getToken"]);
    // return await axios.get(`${API_HOST}/users`,
    //     {
    //         headers: {
    //             "token": store.getters["getToken"],
    //             "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
    //         }
    //     })
    //     .then((response) => {
    //         console.log(response.data)
    //     })
    //     .catch(() => { });
}
