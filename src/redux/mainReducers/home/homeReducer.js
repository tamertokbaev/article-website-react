const GET_POSTS = "GET_POSTS"
const SET_POSTS = "SET_POSTS"
const SET_IS_EMPTY = "SET_IS_EMPTY"

/*
* Following structure. Example:
* "id":401,
* "created_at":"1 week ago",
* "title":"Dolores qui non dolore.",
* "username":"nesciunt",
* "image":"http:\/\/127.0.0.1:8000\/storage\/uploads\/Pnv0cQ0PvzzJH0eJeiTFxKvSKDaN8iFporTsWiBn.jpg"
* */

let initialState = {
    postsHomePage: [
        {
            id: '',
            created_at: '',
            title: '',
            shortDescription: '',
            username: '',
            image: ''
        }
    ],
    isEmpty: true
}

const homeReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_POSTS:
            return {...state}
        case SET_POSTS:
            return {...state, postsHomePage: action.postsHomePage}
        case SET_IS_EMPTY:
            return {...state, isEmpty: action.isEmpty}
        default:
            return state
    }
}

export const getPostsHomePageActionCreator = () => ({type: GET_POSTS})
export const setPostsHomePageActionCreator = (postsHomePage) => ({type: SET_POSTS, postsHomePage: postsHomePage})
export const setIsEmptyActionCreator = (isEmpty) => ({type: SET_IS_EMPTY, isEmpty: isEmpty})

export default homeReducer;