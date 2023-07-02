import { applyMiddleware, createStore } from "redux";
import allMusicReducer from './reduxServices/reducers/allMusicReducer'
import thunk from "redux-thunk";

const store = createStore(allMusicReducer, applyMiddleware(thunk))

export default store;