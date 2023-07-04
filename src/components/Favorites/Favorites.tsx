import { useSelector } from "react-redux";


const Favorites = () => {

    const { allFavoriteMusic } = useSelector(state => state.allFavoriteMusic)

    

    return (
        <div>
            <h1>This is Favorite Component</h1>
        </div>
    );
};

export default Favorites;