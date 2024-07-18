import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function MovieCard({ title, poster }) {
  return (
    <>
      <Link to={title}>
        <div className="border border-stone-700 bg-neutral-800 text-white p-3  lg:p-4 2xl:p-5 rounded-lg cursor-pointer hover:scale-105  duration-100 ">
          <div>
            <img className="rounded-lg mb-3 lg:mb-4" src={poster} alt="" />
          </div>
          <div className="flex justify-between flex-col lg:flex-row items-center gap-1 text-xs text  2xl:text-base">
            <div className="flex  gap-1 lg:gap-2 items-center text-stone-400 bg-neutral-900 border border-stone-700 px-2 lg:px-3 py-1 rounded-full ">
              <FontAwesomeIcon icon={faClock} />
              <p>1h 57min</p>
            </div>
            <div className="flex  items-center text-stone-400 bg-neutral-900 border border-stone-700 px-2 lg:px-3 py-1 rounded-full ">
              <FontAwesomeIcon className="text-red-700" icon={faStar} />
              <FontAwesomeIcon className="text-red-700" icon={faStar} />
              <FontAwesomeIcon className="text-red-700" icon={faStar} />
              <FontAwesomeIcon className="text-red-700" icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <p>20K</p>
            </div>
          </div> 
        </div>
      </Link>
    </>
  );
}
