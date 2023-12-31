import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Slide } from "react-awesome-reveal";
import SingleFavoriteMusic from "./SingleFavoriteMusic";



const Favorites = () => {

    const { user } = useContext(AuthContext)

    const [allMusic, setAllMusic] = useState([])

    useEffect(() => {
        fetch(`https://audio-vibe-server.vercel.app/favoriteMusicByUser/${user?.email}`)
            .then(res => res.json())
            .then(data => setAllMusic(data))
    }, [user])

    return (
        <div>
            <Slide>
                <h3 className="text-center fw-bold mt-3">Your Favorite Music</h3>
            </Slide>
            <div className="all-music-container p-2 mt-3 overflow-hidden">
                {
                    allMusic.map((music: Record<string, any>) => <SingleFavoriteMusic
                        key={music._id}
                        music={music}
                    >

                    </SingleFavoriteMusic>)
                }
            </div>
        </div>
    );
};

export default Favorites;