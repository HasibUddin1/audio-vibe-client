import { NavLink } from "react-router-dom";
import './NavigationBar.css'
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { MdFavorite, MdPlaylistAddCircle } from "react-icons/md";
import { useContext } from 'react';
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext)

    // TODO: Implementation of React Icons

    const handleLogout = () => {
        logOut()
        .then(() => {
            Swal.fire({
                title: '',
                text: 'You have successfully logged out',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="bg-primary d-flex flex-column full-height pt-5 align-items-center gap-3 border border-primary navigation-container position-sticky">
            {
                user ?
                    <h5 className="text-white fw-bold">Welcome, {user?.displayName}</h5> :
                    <></>
            }
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive
                        ? "bg-secondary-subtle p-2 text-black fw-bold rounded nav-link fs-5 d-flex align-items-center gap-2"
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
            {
                user ?
                <button onClick={handleLogout} type="button" className="btn btn-danger fw-bold fs-6">Logout</button> :
                    <NavLink
                        to='/login'
                        className={({ isActive }) =>
                            isActive
                                ? "bg-secondary-subtle p-2 text-black fw-bold nav-link rounded fs-5 d-flex align-items-center gap-2"
                                : "text-white fw-bold nav-link fs-5 d-flex align-items-center gap-2"
                        }
                    >
                        <FaUser></FaUser> Login
                    </NavLink>
            }
        </div>
    );
};

export default NavigationBar;