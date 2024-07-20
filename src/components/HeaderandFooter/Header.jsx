import logo from "../../assets/logo/logo.png";
import NavButtons from "./Navbuttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const [dropDownStatus, setDropDownStatus] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <header className="mb-10 lg:mb-12 2xl:mb-14">
        <div className="flex items-center justify-between text-white">
          <div>
            <img src={logo} alt="Logo" className="w-28 lg:w-36 2xl:w-48" />
          </div>
          <div className="hidden lg:block absolute left-1/2 transform top-4 -translate-x-1/2">
            <NavButtons />
          </div>
          <div className="hidden lg:flex gap-4 items-center ">
            <FontAwesomeIcon
              icon={faBell}
              onClick={() => {
                setIsClicked(!isClicked);
              }}
              className={`cursor-pointer duration-100 hover:text-gray-400 hover:scale-110 ${
                isClicked ? "text-red-600" : "text-white"
              }`}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-white cursor-pointer transition duration-200 transform hover:text-gray-400 hover:scale-110"
              onClick={() => {
                setShowSearchInput(!showSearchInput);
              }}
            />

            {showSearchInput && (
              <input
                autoFocus
                onBlur={() => {
                  setShowSearchInput(!showSearchInput);
                }}
                className=" bg-neutral-700  rounded-lg px-1  lg:max-w-44"
              ></input>
            )}
          </div>

          <div className="flex gap-3 items-center lg:hidden  ">
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
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              onClick={() => {
                setShowSearchInput(!showSearchInput);
              }}
              className="text-white cursor-pointer transition duration-200 transform hover:text-gray-400 hover:scale-110"
            />

            {showSearchInput && (
              <input
                autoFocus
                onBlur={() => {
                  setShowSearchInput(!showSearchInput);
                }}
                className=" bg-neutral-700  rounded-lg text-xs  p-1  max-w-28"
              ></input>
            )}
          </div>
          {dropDownStatus && (
            <div className="absolute top-16 right-4 text-center bg-stone-950 border border-stone-700 rounded-lg shadow-lg p-4 z-50">
              <NavButtons />
              <div className="flex flex-col  gap-6 mt-4">
                <FontAwesomeIcon
                  icon={faBell}
                  onClick={() => {
                    setIsClicked(!isClicked);
                  }}
                  className={`cursor-pointer duration-100 hover:text-gray-400 hover:scale-110 ${
                    isClicked ? "text-red-600" : "text-white"
                  }`}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
