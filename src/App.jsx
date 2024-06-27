import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { Button } from "flowbite-react";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <FontAwesomeIcon icon={faPause} />

      <Button>this is test</Button>
    </>
  );
}

export default App;
