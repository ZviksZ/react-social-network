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
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}
export const todosAPI = {
    getTodos() {
        return instance.get(`todo-lists`).then(response => response.data);
    },
    createTodolist(title) {
        return instance.post(`todo-lists`, {title: title});
    },
    deleteTodolist(todolistId) {
        return instance.delete(`todo-lists/${todolistId}`);
    },
    updateTodolistTitle(todolistId, title) {
        return instance.put(`todo-lists/${todolistId}`, {title: title});
    },
    getTodolistTasks(todolistId, itemsPortion, pageSize) {
        return instance.get(`todo-lists/${todolistId}/tasks?page=${itemsPortion}&count=${pageSize}`).then(response => response.data);
    },
    createNewTask(todolistId, title) {
        return instance.post(`todo-lists/${todolistId}/tasks`, {title: title});
    },
    updateTask(todolistId, taskId, text) {
        return instance.put(`/todo-lists/${todolistId}/tasks/${taskId}`, text);
    },
    deleteTask(todolistId, taskId) {
        return instance.delete(`/todo-lists/${todolistId}/tasks/${taskId}`);
    }
    
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
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


 
