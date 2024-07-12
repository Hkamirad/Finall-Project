import directorsample from "../../assets/directorsample.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faCalendar,faLanguage,faThLarge } from "@fortawesome/free-solid-svg-icons";




export default function MovieData() {
  const blackTextCardCreator = (texts = []) => {
    return texts.map((text) => {
      return (
        <div className="blackCard p-2 inline-block text-xs 2xl:text-sm">
          <p>{text}</p>
        </div>
      );
    });
  };
  const ratingCreator = (critics = []) => {
    return critics.map((critic) => {
      return (
        <>
          <div className="blackCard p-2">
            {" "}
            <p>{critic}</p>
            <div className="flex items-center text-neutral-400 gap-1 ">
              <FontAwesomeIcon className="text-red-700 text-xs" icon={faStar} />
              <FontAwesomeIcon className="text-red-700 text-xs" icon={faStar} />
              <FontAwesomeIcon className="text-red-700 text-xs" icon={faStar} />
              <FontAwesomeIcon className="text-red-700 text-xs" icon={faStar} />
              <FontAwesomeIcon icon={faStar} className="text-xs" />
              <p>4</p>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div>
        <h5 className="text-neutral-400 mb-1 lg:mb-2"><FontAwesomeIcon icon={faCalendar}/> Released Year</h5>
        <p>2022</p>
      </div>
      <div>
        <h5 className="text-neutral-400 mb-2 lg:mb-2"><FontAwesomeIcon icon={faLanguage}/> Available Languages</h5>
        <div className="flex gap-1 lg:gap-2 flex-wrap">
          {blackTextCardCreator(["English", "Hindi", "Presian", "French"])}
        </div>
      </div>
      <div>
        <h5 className="text-neutral-400 mb-2 lg:mb-2"><FontAwesomeIcon icon={faStar}/> Ratings</h5>
        <div className=" flex gap-4 flex-wrap">
          {ratingCreator(["IMDB", "Streamvibe"])}
        </div>
      </div>
      <div>
        <h5 className="text-neutral-400 mb-2 lg:mb-2"><FontAwesomeIcon icon={faThLarge}/> Gernes</h5>
        <div className="flex gap-1 lg:gap-2  flex-wrap">
          {blackTextCardCreator(["Action", "Advanture"])}
        </div>
      </div>
      <div>
        <h5 className="text-neutral-400 mb-2 lg:mb-2"> Director</h5>
        <div className="blackCard p-2">
          {" "}
          <div className="flex gap-3 lg:gap-4 items-center">
            <div className="rounded-lg overflow-hidden  h-16 lg:h-20 2xl:h-24 ">
              <img
                className="object-cover w-full h-full"
                src={directorsample}
                alt=""
              />
            </div>
            <div>
              <h6>Rishab Shetty</h6>
              <p className="text-neutral-400 text-xs"> From India</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-neutral-400 mb-2 lg:mb-2"> Music</h5>
        <div className="blackCard p-2">
          {" "}
          <div className="flex gap-3 lg:gap-4 items-center">
            <div className="rounded-lg overflow-hidden  h-16 lg:h-20 2xl:h-24 ">
              <img
                className="object-cover w-full h-full"
                src={directorsample}
                alt=""
              />
            </div>
            <div>
              <h6>B. Ajaneesh Loknath</h6>
              <p className="text-neutral-400 text-xs"> From India</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
