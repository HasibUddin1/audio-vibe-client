import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllMusic from "../../reduxServices/actions/allMusicActions";
import SingleMusic from "../SingleMusic/SingleMusic";
import './Search.css'


const Search = () => {

    const {allMusic, isLoading, error} = useSelector(state => state)
    // console.log(allMusic)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllMusic())
    },[dispatch])

    return (
        <div className="">
            <div className="d-flex mt-5 justify-content-center mx-auto">
                <input className="form-control w-75" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </div>
            <div className="all-music-container p-2">
                {
                    allMusic.map(music => <SingleMusic
                        key={music._id}
                        music={music}
                    ></SingleMusic>)
                }
            </div>
        </div>
    );
};

export default Search;