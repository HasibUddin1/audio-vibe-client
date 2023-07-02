import { NavLink } from "react-router-dom";
import './NavigationBar.css'
import { FaHome, FaSearch } from "react-icons/fa";
import { MdFavorite, MdPlaylistAddCircle } from "react-icons/md";

const NavigationBar = () => {

    // TODO: Implementation of React Icons

    return (
        <div className="bg-primary d-flex flex-column full-height pt-5 align-items-center gap-3 border border-primary navigation-container position-sticky">
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive
                        ? "bg-secondary-subtle p-2 text-black fw-bold nav-link rounded fs-5 d-flex align-items-center gap-2"
                        : "text-white fw-bold nav-link fs-5 d-flex align-items-center gap-2"
                }
            >
                <FaHome></FaHome> Home
            </NavLink>
            <NavLink
                to='/search'
                className={({ isActive }) =>
                    isActive
                        ? "bg-secondary-subtle p-2 text-black fw-bold nav-link rounded fs-5 d-flex align-items-center gap-2"
                        : "text-white fw-bold nav-link fs-5 d-flex align-items-center gap-2"
                }
            >
                <FaSearch></FaSearch> Search
            </NavLink>
            <NavLink
                to='/favorites'
                className={({ isActive }) =>
                    isActive
                        ? "bg-secondary-subtle p-2 text-black fw-bold nav-link rounded fs-5 d-flex align-items-center gap-2"
                        : "text-white fw-bold nav-link fs-5 d-flex align-items-center gap-2"
                }
            >
               <MdFavorite></MdFavorite> Favorites
            </NavLink>
            <NavLink
                to='/playlists'
                className={({ isActive }) =>
                    isActive
                        ? "bg-secondary-subtle p-2 text-black fw-bold nav-link rounded fs-5 d-flex align-items-center gap-2"
                        : "text-white fw-bold nav-link fs-5 d-flex align-items-center gap-2"
                }
            >
               <MdPlaylistAddCircle></MdPlaylistAddCircle> Playlists
            </NavLink>
        </div>
    );
};

export default NavigationBar;