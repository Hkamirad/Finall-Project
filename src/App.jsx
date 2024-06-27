import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { Button } from "flowbite-react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
   
    <Outlet/>

    </>
  );
}

export default App;
