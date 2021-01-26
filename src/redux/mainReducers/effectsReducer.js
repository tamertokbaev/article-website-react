const SET_LOADING = "SET_LOADING"

let initialState = {
    isLoading: true
}

const effectsReducer = (state=initialState, action) => {
    switch (action.type){
        case SET_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}


export const setLoadingStateActionCreator = (isLoading) => ({type: SET_LOADING, isLoading: isLoading})
export default effectsReducer;
