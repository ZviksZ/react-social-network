import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/', 
    headers: {
        'API-KEY': 'fd8957ce-caea-4e92-b2d0-6ffd7fdf3dc8'
    }    
})

export const userAPI = {
    getUsers(currentPage, pageSize ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
    }
}
export const authAPI = {
    getMyProfile() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe
        });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}
export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile );
    }
}


export const testAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`);
    },
    uploadProfilePhoto(photo) {
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
    },
}

 
