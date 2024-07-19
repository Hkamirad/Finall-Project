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
      const isActive = currentLocation.startsWith(nav.path);
      return (
        <Link
          key={nav.name}
          to={nav.path}
          aria-current="page"
          className={`px-2 lg:px-4 py-2 text-xs lg:text-sm  2xl:text-lg font-medium text-white  rounded-lg hover:bg-zinc-900  ${
            isActive && "bg-zinc-900"
          }`}
        >
          {nav.name}
        </Link>
      );
    });
  };
  return (
    <>
      <div className=" inline-flex flex-col lg:flex-row rounded-lg shadow-sm  bg-stone-950 lg:border lg:border-stone-700 gap-1  p-2 ">
        {navButtonCreator()}
      </div>
    </>
  );
}
