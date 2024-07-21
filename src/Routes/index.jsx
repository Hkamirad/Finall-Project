import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { loader as moviesLoader } from "./MoviesPageRout";
import { Loader as openMovieLoader } from "./OpenMoviePageRout";
import { Loader as SearchLoader } from "./SearchPageRout";
import MoviesPageRout from "./MoviesPageRout";
import OpenMoviePageRout from "./OpenMoviePageRout";
import SearchPageRout from "./SearchPageRout";

export const Router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={"movies"} /> },
      {
        path: "Movies",
        element: <MoviesPageRout />,
        loader: moviesLoader,
      },
      {
        path: "movies/:id",
        element: <OpenMoviePageRout />,
        loader: openMovieLoader,
      },
      {
        path: "movies/search",
        element: <SearchPageRout />,
        loader: SearchLoader
      },

      {
        path: "Home",
        element: (
          <p className="text-white mt-6">Home component comming soon!</p>
        ),
      },
      {
        path: "Support",
        element: (
          <p className="text-white mt-6">Support component comming soon!</p>
        ),
      },
      {
        path: "Subscriptions",
        element: (
          <p className="text-white mt-6">
            Subscriptions component comming soon!
          </p>
        ),
      },
    ],
  },
]);
