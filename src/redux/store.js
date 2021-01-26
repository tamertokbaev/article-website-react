import {combineReducers, createStore} from "redux";
import homeReducer from "./mainReducers/home/homeReducer";
import articleSingleReducer from "./mainReducers/articles/articleSingleReducer";
import effectsReducer from "./mainReducers/effectsReducer";
import articleListReducer from "./mainReducers/articles/articleListReducer";
import authReducer from "./mainReducers/authReducer";
import appReducer from "./mainReducers/appReducer";

let reducers = combineReducers(
    {
        homePage: homeReducer,
        singleArticle: articleSingleReducer,
        articleList: articleListReducer,
        effects: effectsReducer,
        auth: authReducer,
        app: appReducer,
    });

let store = createStore(reducers);

window.store = store
export default store;