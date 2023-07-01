import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Search from "../components/Search/Search";
import Favorites from "../components/Favorites/Favorites";
import Playlists from "../components/Playlists/Playlists";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/search',
          element: <Search></Search>
        },
        {
          path: '/favorites',
          element: <Favorites></Favorites>
        },
        {
          path: '/playlists',
          element: <Playlists></Playlists>
        }
      ]
    }
  ])

  export default router;