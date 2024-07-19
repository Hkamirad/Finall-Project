import "./App.css";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/HeaderandFooter/Header";
import Footer from "./components/HeaderandFooter/Footer";
import { Spinner } from "flowbite-react";

function App() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && (
        <>
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-neutral-900 opacity-50 z-20"></div>
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
            <Spinner color="failure" />
          </div>
        </>
      )}
      <main className="min-h-screen bg-neutral-900 ">
        <div className="mx-6 lg:mx-12 2xl:mx-20 py-4">
          <Header />

          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
