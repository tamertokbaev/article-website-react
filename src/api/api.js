import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "http://127.0.0.1:8000/",
    headers: {
        Authorization: localStorage.getItem('token') !== 'undefined' ? `Bearer ${localStorage.getItem('token')}` : ""
    }
})

export const usersAPI = {
    getCSRF() {
        return instance.get('sanctum/csrf-cookie')
    },
    login(loginData) {
        return instance.post(`api/users/login`, loginData)
    },
    logout() {
        return instance.post(`api/users/logout`)
    },
    register(userData) {
        return instance.post(`api/users/register`, userData)
    },
    me() {
        return instance.get(`api/users/me`)
    }
}

export const articlesAPI = {
    createArticle(article){
        return instance.post(`api/articles/create`, article)
    }
}