import { applyMiddleware, combineReducers, createStore } from "redux";
import allMusicReducer from './reduxServices/reducers/allMusicReducer'
import thunk from "redux-thunk";
import allFavoriteMusicReducer from "./reduxServices/reducers/allFavoriteMusicReducer";

const rootReducer = combineReducers({
    allMusic: allMusicReducer,
    allFavoriteMusic: allFavoriteMusicReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;