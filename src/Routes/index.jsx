import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import SelectedMovie from "../components/openMoviePage/Selectedmoviepage";
import { loader as moviesLoader } from "./MoviesPageRout";
import MoviesPageRout from "./MoviesPageRout";

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
        path: "movies/:movieName",
        element: <SelectedMovie />,
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
