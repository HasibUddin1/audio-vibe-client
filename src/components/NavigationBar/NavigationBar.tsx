import { Link } from "react-router-dom";


const NavigationBar = () => {
    return (
        <div className="bg-primary offcanvas offcanvas-start show justify-content-center gap-3 ps-5">
            <Link className="text-white fw-bold nav-link fs-5" to='/'>Home</Link>
            <Link className="text-white fw-bold nav-link fs-5" to='/search'>Search</Link>
            <Link className="text-white fw-bold nav-link fs-5" to='/favorites'>Favorites</Link>
            <Link className="text-white fw-bold nav-link fs-5" to='/playlists'>Playlists</Link>
        </div>
    );
};

export default NavigationBar;