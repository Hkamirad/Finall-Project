import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sample from "../assets/suggestedMovieSample.png";
import {
  faPlay,
  faPlus,
  faThumbsUp,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

export default function SuggestedMovies() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-468 lg:h-709 2xl:h-835 rounded-lg mb-10"
        style={{ backgroundImage: `url(${sample})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414ff] to-[#14141400] rounded-lg"></div>
        <div className=" absolute bottom-10 lg:bottom-28  2xl:bottom-32 inset-x-0 flex flex-col gap-4 items-center text-white ">
          <h3 className="text-2xl lg:text-3xl 2xl:text-4xl">
            Avengers : Endgame
          </h3>
          <p className="hidden lg:block text-center text-neutral-400">
            With the help of remaining allies, the Avengers must assemble once
            more in order to undo Thanos's actions and undo the chaos to the
            universe, no matter what consequences may be in store, and no matter
            who they face... Avenge the fallen.
          </p>
          <div className="flex flex-col lg:flex-row gap-4  justify-center items-center ">
            <div className="bg-red-700 rounded-lg hover:cursor-pointer hover:scale-105 flex p-2 items-center gap-2 justify-center px-24 lg:px-4">
              {" "}
              <FontAwesomeIcon icon={faPlay} />
              <p>Play Now</p>
            </div>
            <div className="flex gap-1">
              <FontAwesomeIcon
                icon={faPlus}
                className="bg-black p-3 rounded-lg border border-stone-700 hover:cursor-pointer hover:scale-105"
              />
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="bg-black p-3 rounded-lg border border-stone-700 hover:cursor-pointer hover:scale-105"
              />
              <FontAwesomeIcon
                icon={faVolumeUp}
                className="bg-black p-3 rounded-lg border border-stone-700 hover:cursor-pointer hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
