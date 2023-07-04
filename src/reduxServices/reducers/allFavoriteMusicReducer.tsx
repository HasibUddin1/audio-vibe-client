import { GET_ALL_FAVORITE_MUSIC, GET_ALL_FAVORITE_MUSIC_FAILED, GET_ALL_FAVORITE_MUSIC_SUCCESS } from "../constants/allMusicConstants";


const initialFavoriteMusicState = {
    isLoading: false,
    allFavoriteMusic: [],
    error: null
}

const allFavoriteMusicReducer = (state = initialFavoriteMusicState, action: any) => {
    switch (action.type) {
        case GET_ALL_FAVORITE_MUSIC:

            return {
                ...state,
                isLoading: true
            };
        case GET_ALL_FAVORITE_MUSIC_SUCCESS:
            return {
                ...state,
                isLoading: false,
                allFavoriteMusic: action.payload
            }
        case GET_ALL_FAVORITE_MUSIC_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default allFavoriteMusicReducer;