import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import MoviesPage from "../components/Moviespage";

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
