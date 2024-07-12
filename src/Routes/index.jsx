import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import MoviesPage from "../components/moviesPage/Moviespage";
import SelectedMovie from "../components/openMoviePage/Selectedmoviepage";

export const Router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={"movies"} /> },
      {
        path: "Movies",
        element: <MoviesPage />,
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
