import axios from "axios";
import {ProfileType} from "../types/types";

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': 'b27a57c5-de93-458a-ad82-c833d0eeb199'
   }
})

export const userAPI = {
   getUsers(currentPage: number, pageSize: number) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data);
   },
   unfollowUser(userId: number) {
      return instance.delete(`follow/${userId}`)
   },
   followUser(userId: number) {
      return instance.post(`follow/${userId}`)
   }
}

export enum ResultCodesEnum {
   Success = 0,
   Error = 1
}
export enum ResultCodeForCaptcha {
   CaptchaIsRequired = 10
}

type GetMyProfileType = {
   data: {id: number, email: string, login: string}
   resultCode: ResultCodesEnum
   messages: Array<string>
}
type LoginType = {
   data: {userId: string}
   resultCode: ResultCodesEnum | ResultCodeForCaptcha
   messages: Array<string>
}
type LogoutType = {
   data: {}
   resultCode: ResultCodesEnum
   messages: Array<string>
}
export const authAPI = {
   getMyProfile() {
      return instance.get<GetMyProfileType>(`auth/me`).then(response => response.data);
   },
   login(email: string, password: string, rememberMe = false, captcha: null | string = null  ) {
      return instance.post<LoginType>(`auth/login`, {
         email,
         password,
         rememberMe,
         captcha
      }).then(response => response.data);
   },
   logout() {
      return instance.delete<LogoutType>(`auth/login`).then(response => response.data);
   }
}


export const securityAPI = {
   getCaptchaUrl() {
      return instance.get(`security/get-captcha-url`);
   }
}
export const profileAPI = {
   getUserProfile(userId: number) {
      return instance.get(`profile/${userId}`)
   },
   getStatus(userId: number) {
      return instance.get(`profile/status/${userId}`)
   },
   updateStatus(status: string) {
      return instance.put(`profile/status`, {status: status})
   },
   savePhoto(photoFile: any) {
      const formData = new FormData();
      formData.append("image", photoFile);

      return instance.put(`profile/photo`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      });
   },
   saveProfile(profile: ProfileType) {
      return instance.put(`profile`, profile);
   }
}


/*export const todosAPI = {
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
  updateTask(todolistId, taskId, newItem) {
     return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, {
        status: {
           title: newItem.title,
           description: newItem.description,
           completed: newItem.completed,
           status: newItem.status,
           priority: newItem.priority,
           startDate: newItem.startDate,
           deadline: newItem.deadline
        }
     });
  },
  deleteTask(todolistId, taskId) {
     return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`);
  }
}*/
