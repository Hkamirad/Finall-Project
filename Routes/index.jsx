import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";

export const Router = createBrowserRouter([
  { path: "", element: <App />, children: [{}] },
]);
