const SET_ARTICLE_LIST = "SET_ARTICLE_LIST"
const SET_IS_EMPTY = "SET_IS_EMPTY"

let initialState = {
    data: [{
        id: null,
        title: null,
        shortDescription: null,
        created_at: null,
        username: null,
        image: null
    }],
    links: [],
    meta: [{
        currentPage: null,
        lastPage: null,
        links: []
    }],
    isEmpty: true
}

const articleListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTICLE_LIST:
            return {...state, data: action.data, links: action.links, meta: action.meta}
        case SET_IS_EMPTY:
            return {...state, isEmpty: action.isEmpty}
        default:
            return state
    }
}

export const setArticleListPaginationActionCreator = (data, links, meta) => ({type: SET_ARTICLE_LIST, data, meta, links})
export const setIsEmptyActionCreator = (isEmpty) => ({type: SET_IS_EMPTY, isEmpty})
export default articleListReducer;