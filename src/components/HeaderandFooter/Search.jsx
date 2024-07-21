import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Search({ showSearchInput, setShowSearchInput }) {
  const [movieSearchedName, setMovieSerachedName] = useState();
  const [searchedMovie, setSearchedMovie] = useState();
  const navigate = useNavigate();

  const handleSearch = (movieName) => {
    setSearchedMovie(movieName);
  };
  useEffect(() => {
    if (searchedMovie) {
      navigate(`/movies/search?query=${movieSearchedName}`);
    }
  }, [searchedMovie]);
  return (
    <>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-white cursor-pointer transition duration-200 transform hover:text-gray-400 hover:scale-110"
        onClick={() => {
          setShowSearchInput(!showSearchInput);
        }}
      />

      {showSearchInput && (
        <div className="flex gap-2 lg:gap-3 items-center">
          {" "}
          <input
            autoFocus
            value={movieSearchedName}
            onChange={(e) => {
              setMovieSerachedName(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(movieSearchedName);
              }
            }}
            className=" bg-neutral-700  rounded-lg text-xs lg:text-base  p-1  max-w-28  lg:max-w-44"
          />
          <FontAwesomeIcon
            className="bg-neutral-600 border  rounded-full p-1 text-xs lg:text-sm lg:p-2 text-white hover:cursor-pointer hover:scale-105"
            icon={faArrowRight}
            onClick={() => {
              handleSearch(movieSearchedName);
            }}
          />
        </div>
      )}
    </>
  );
}
