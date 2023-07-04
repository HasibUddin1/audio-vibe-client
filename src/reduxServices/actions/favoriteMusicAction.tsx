import { useContext } from "react"
import { GET_ALL_FAVORITE_MUSIC, GET_ALL_FAVORITE_MUSIC_FAILED, GET_ALL_FAVORITE_MUSIC_SUCCESS } from "../constants/allMusicConstants"
import { AuthContext } from "../../providers/AuthProviders"




const getAllFavoriteMusic = () => async (dispatch) => {
    const { user } = useContext(AuthContext)
    dispatch({ type: GET_ALL_FAVORITE_MUSIC })
    try {
        fetch(`http://localhost:5000/favoriteMusicByUser/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: GET_ALL_FAVORITE_MUSIC_SUCCESS, payload: data })
            })
    }
    catch (error: any) {
        dispatch({ type: GET_ALL_FAVORITE_MUSIC_FAILED, payload: error.message })
    }
}

export default getAllFavoriteMusic;