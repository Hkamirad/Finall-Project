import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className=" min-h-screen bg-neutral-900 ">
        <div className="mx-6  lg:mx-12  2xl:mx-20 py-4">
          <Header />

          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
