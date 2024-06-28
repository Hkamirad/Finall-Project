import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <main className="mx-4  lg:mx-12  2xl:mx-20  min-h-96 ">
        <Header />

        <Outlet />
      </main>
    </>
  );
}

export default App;
