import logo from "../assets/logo/logo.png";
import NavButtons from "./Navbuttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [dropDownStatus, setDropDownStatus] = useState(false);

  return (
    <>
      <header>
        <div className="flex items-center justify-between text-white">
          <div>
            <img src={logo} alt="Logo" className="w-28 lg:w-36 2xl:w-48" />
          </div>
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
            <NavButtons />
          </div>
          <div className="hidden lg:flex gap-6">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-white cursor-pointer transition duration-200 transform hover:text-gray-400 hover:scale-110"
            />
            <FontAwesomeIcon
              icon={faBell}
              className="text-white cursor-pointer transition duration-200 transform hover:text-gray-400 hover:scale-110"
            />
          </div>
          <div className="block lg:hidden">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => {
                setDropDownStatus(!dropDownStatus);
              }}
              onBlur={() => {
                setDropDownStatus(false);
              }}
              className="cursor-pointer transition duration-200 transform hover:text-gray-400 hover:scale-110"
            />
          </div>
          {dropDownStatus && (
            <div className="absolute top-16 right-4 text-center bg-stone-950 border border-stone-700 rounded-lg shadow-lg p-4 z-50">
              <NavButtons />
              <div className="flex flex-col  gap-6 mt-4">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-white cursor-pointer transition duration-200 transform hover:text-gray-400 hover:scale-110"
                />
                <FontAwesomeIcon
                  icon={faBell}
                  className="text-white cursor-pointer transition duration-200 transform hover:text-gray-400 hover:scale-110"
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
