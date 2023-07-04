import { applyMiddleware, combineReducers, createStore } from "redux";
import allMusicReducer from './reduxServices/reducers/allMusicReducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    allMusic: allMusicReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;