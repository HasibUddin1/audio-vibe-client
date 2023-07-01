import { NavLink } from "react-router-dom";
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <div className="bg-primary d-flex flex-column h-100 justify-content-center align-items-center gap-3 border border-primary navigation-container">
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive
                        ? "bg-secondary-subtle p-2 text-black fw-bold nav-link rounded fs-5"
                        : "text-white fw-bold nav-link fs-5"
                }
            >
                Home
            </NavLink>
            <NavLink
                to='/search'
                className={({ isActive }) =>
                    isActive
                        ? "bg-secondary-subtle p-2 text-black fw-bold nav-link rounded fs-5"
                        : "text-white fw-bold nav-link fs-5"
                }
            >
                Search
            </NavLink>
            <NavLink
                to='/favorites'
                className={({ isActive }) =>
                    isActive
                        ? "bg-secondary-subtle p-2 text-black fw-bold nav-link rounded fs-5"
                        : "text-white fw-bold nav-link fs-5"
                }
            >
                Favorites
            </NavLink>
            <NavLink
                to='/playlists'
                className={({ isActive }) =>
                    isActive
                        ? "bg-secondary-subtle p-2 text-black fw-bold nav-link rounded fs-5"
                        : "text-white fw-bold nav-link fs-5"
                }
            >
                Playlists
            </NavLink>
        </div>
    );
};

export default NavigationBar;