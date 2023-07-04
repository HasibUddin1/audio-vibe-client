import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Search from "../components/Search/Search";
import Favorites from "../components/Favorites/Favorites";
import Playlists from "../components/Playlists/Playlists";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <PrivateRoute><Home></Home></PrivateRoute>
        },
        {
          path: 'search',
          element: <PrivateRoute><Search></Search></PrivateRoute>
        },
        {
          path: 'favorites',
          element: <PrivateRoute><Favorites></Favorites></PrivateRoute>
        },
        {
          path: 'playlists',
          element: <PrivateRoute><Playlists></Playlists></PrivateRoute>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        }
      ]
    }
  ])

  export default router;