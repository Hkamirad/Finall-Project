import { useLocation, Link } from "react-router-dom";

export default function NavButtons() {
  const location = useLocation();
  const currentLocation = location.pathname;

  const navButtonCreator = (
    navs = [
      { name: "Home", path: "/home" },
      { name: "Movies", path: "/movies" },
      { name: "Support", path: "/support" },
      { name: "Subscriptions", path: "/subscriptions" },
      
    ]
  ) => {
    return navs.map((nav) => {
      return (
        <Link
          key={nav.name}
          to={nav.path}
          aria-current="page"
          className={`px-4 py-2 text-xs lg:text-xs font-medium text-white  rounded-lg hover:bg-zinc-900 focus:z-10 focus:ring-2 focus:ring-zinc-900 focus:text-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white ${
            nav.path === currentLocation && "bg-zinc-900"
          }`}
        >
          {nav.name}
        </Link>
      );
    });
  };
  return (
    <>
      <div className=" inline-flex flex-col lg:flex-row rounded-lg shadow-sm  bg-stone-950 lg:border lg:border-stone-700 gap-1  p-2">
        {navButtonCreator()}
      </div>
    </>
  );
}
