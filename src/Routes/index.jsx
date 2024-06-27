import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";

export const Router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={"movies"} /> },
      { path: "movies", element: <p>movies</p> },
    ],
  },
]);
