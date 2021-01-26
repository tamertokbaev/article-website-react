const SET_ARTICLE = "SET_ARTICLE"
const GET_ARTICLE = "GET_ARTICLE"

/*
Following structure
{
    "id":401,
    "created_at":"1 week ago",
    "title":"Dolores qui non dolore.",
    "shortDescription":"Ea veniam ad asperiores occaecati nostrum ab delectus voluptatem commodi consequatur possimus.",
    "text":"Quae delectus dolorum commodi reprehenderit quidem assumenda non. Officiis in consequatur culpa tempora suscipit officiis fugit quo. Atque eum odit et laboriosam est. Aliquid accusamus optio earum quibusdam magnam facere. Odio expedita asperiores magnam. Quis qui ut dolores ducimus eius. Inventore nisi animi ut dolores neque deleniti ratione a. Veniam rem molestiae molestiae et est eos autem praesentium.",
    "username":"nesciunt",
    "image":"http:\/\/127.0.0.1:8000\/storage\/uploads\/Pnv0cQ0PvzzJH0eJeiTFxKvSKDaN8iFporTsWiBn.jpg",
    "comments":[
    {
        "id":1,
        "created_at":"1 week ago",
        "text":"New comment",
        "username":"tamertokbaev"
    }
}
*/

let initialState = {
    article: {
        id: null,
        created_at: null,
        title: null,
        shortDescription: null,
        text: null,
        username: null,
        image: null,
        comments: []
    }
}

const articleSingleReducer = (state= initialState, action) => {
    switch (action.type){
        case SET_ARTICLE:
            return {...state, article: action.article}
        default:
            return state
    }
}

export const getArticleSingleActionCreator = () => ({type: GET_ARTICLE})
export const setArticleSingleActionCreator = (article) => ({type: SET_ARTICLE, article: article})

export default articleSingleReducer;