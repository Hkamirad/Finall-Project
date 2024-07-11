import directorsample from "../../assets/directorsample.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
export default function Cast() {
  const castImageCreator = (url) => {
    return (
      <>
        {" "}
        <div className="rounded-lg overflow-hidden  h-20 lg:h-24 2xl:h-28 ">
          <img className="object-cover w-full h-full" src={url} alt="" />
        </div>
      </>
    );
  };
  return (
    <>
      {" "}
      <div className="bg-neutral-800 rounded-lg border border-neutral-700 flex flex-col gap-2 lg:gap-3 p-6">
        <div className="flex justify-between items-center">
          <h5 className="text-neutral-400">Cast</h5>
          <div className="flex gap-2 lg:gap-3 text-neutral-400">
            {" "}
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="bg-neutral-900 p-2 rounded-full cursor-pointer hover:scale-105"
            />{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="bg-neutral-900 p-2 rounded-full cursor-pointer hover:scale-105"
            />{" "}
          </div>
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          {castImageCreator(directorsample)}
          {castImageCreator(directorsample)}
          {castImageCreator(directorsample)}
          {castImageCreator(directorsample)}
          {castImageCreator(directorsample)}
          {castImageCreator(directorsample)}
          {castImageCreator(directorsample)}
          {castImageCreator(directorsample)}
        </div>
      </div>
    </>
  );
}
