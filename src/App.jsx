import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <main className=" min-h-screen bg-stone-950">
        <div className="mx-4  lg:mx-16  2xl:mx-24 ">
        <Header />

        <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
