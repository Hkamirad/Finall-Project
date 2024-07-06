import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sample from "../assets/Ourmoviesmaple.png";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
export default function MovieCard() {
  return (
    <>
      <div className="border border-stone-700 bg-zinc-900 text-white p-3 lg:p-4 rounded-lg cursor-pointer hover:scale-105  duration-100 ">
        <div>
          <img className="rounded-lg mb-3 lg:mb-4" src={sample} alt="" />
        </div>
        <div className="flex justify-between flex-col lg:flex-row items-center gap-1 ">
          <div className="flex  gap-1 lg:gap-2 items-center text-stone-400 bg-neutral-900 border border-stone-700 px-2 lg:px-3 py-1 rounded-full text-xs">
            <FontAwesomeIcon icon={faClock} />
            <p>1h 57min</p>
          </div>
          <div className="flex  items-center text-stone-400 bg-neutral-900 border border-stone-700 px-2 lg:px-3 py-1 rounded-full text-xs">
            <FontAwesomeIcon className="text-red-700" icon={faStar} />
            <FontAwesomeIcon className="text-red-700" icon={faStar} />
            <FontAwesomeIcon className="text-red-700" icon={faStar} />
            <FontAwesomeIcon className="text-red-700" icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <p>20K</p>
          </div>
        </div>
      </div>
    </>
  );
}
