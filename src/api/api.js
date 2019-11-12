import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/', 
    headers: {
        'API-KEY': 'c4b7657d-5c8a-45b0-996f-3cbb21003e6c'
    }    
})

export const userAPI = {
    getUsers(currentPage, pageSize ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}
export const authAPI = {
    getMe() {
        return instance.get(`auth/me`).then(response => response.data);
    }
}


 
