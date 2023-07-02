import { useEffect, useState } from "react";
import SingleMusic from "../SingleMusic/SingleMusic";
import './Search.css'


const Search = () => {

    // const { allMusic } = useSelector(state => state)
    // console.log(allMusic)

    const [searchText, setSearchText] = useState('')
    const [allMusic, setAllMusic] = useState([])

    // console.log(searchText)

    // const handleSearch = () => {
    //     // implement searching
    //     fetch(`http://localhost:5000/getMusicByTitle/${searchText}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }

    useEffect(() => {
        if (searchText) {
            fetch(`http://localhost:5000/getMusicByTitle/${searchText}`)
                .then(res => res.json())
                .then(data => setAllMusic(data))
        }
        else {
            fetch('http://localhost:5000/allMusic')
                .then(res => res.json())
                .then(data => setAllMusic(data))
        }
    }, [searchText])
    // console.log(showMusic)

    return (
        <div className="">
            <div className="d-flex mt-5 justify-content-center mx-auto">
                <input onChange={(event) => setSearchText(event.target.value)} className="form-control w-75" type="search" placeholder="Search" aria-label="Search" />
            </div>
            <div className="all-music-container p-2 mt-5 overflow-hidden">
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