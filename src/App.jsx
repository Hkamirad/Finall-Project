import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <main className=" min-h-screen bg-neutral-900 ">
        <div className="mx-4  lg:mx-12  2xl:mx-20 py-4">
        <Header />

        <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
