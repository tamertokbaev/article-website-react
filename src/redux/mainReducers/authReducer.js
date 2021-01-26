const SET_AUTH = "SET_AUTH"
const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    isAuth: false,
    user: {
        id: null,
        created_at: null,
        email: "",
        email_verified_at: null,
        firstname: "",
        lastname: "",
        image: null,
        username: ""
    }
}


const authReducer = (state=initialState, action) => {
    switch (action.type){
        case SET_AUTH:
            return {...state, isAuth: action.isAuth}
        case SET_USER_DATA:
            return {...state, user: action.user}
        default:
            return state
    }
}

export const setAuthActionCreator = (isAuth) => ({type: SET_AUTH, isAuth})
export const setUserDataActionCreator = (user) => ({type: SET_USER_DATA, user})
export default authReducer;