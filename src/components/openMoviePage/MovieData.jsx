import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCalendar,
  faLanguage,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";

export default function MovieData({ movie }) {
  const genres = movie.genres.map((genre) => genre);
  const blackTextCardCreator = (texts = []) => {
    return texts.map((text) => {
      return (
        <div className="blackCard p-2 inline-block text-xs lg:text-sm">
          <p>{text}</p>
        </div>
      );
    });
  };
  const ratingCreator = (imdb, metaScore) => {
    return (
      <>
        <div className="blackCard px-3 py-2 lg:px-4  text-sm">
          <p className="text-center">IMDB</p>
          <div className="flex items-center justify-center text-neutral-400  ">
            <p>{imdb} / 10</p>
          </div>
        </div>
        <div className="blackCard px-2 py-2 lg:px-4  text-sm">
          <p className="text-center">MetaScore</p>
          <div className="flex items-center justify-center text-neutral-400 gap-1 ">
            <p>{metaScore} / 100</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <h5 className="text-neutral-400 mb-1 lg:mb-2">
          <FontAwesomeIcon icon={faCalendar} /> Released Year
        </h5>
        <p>{movie.year}</p>
      </div>
      <div>
        <h5 className="text-neutral-400 mb-2 lg:mb-2">
          <FontAwesomeIcon icon={faLanguage} /> Country
        </h5>
        <div className="flex gap-1 lg:gap-2 flex-wrap">
          {blackTextCardCreator([movie.country])}
        </div>
      </div>
      <div>
        <h5 className="text-neutral-400 mb-2 lg:mb-2">
          <FontAwesomeIcon icon={faStar} /> Ratings
        </h5>
        <div className=" flex gap-3 lg:gap-4 flex-wrap">
          {ratingCreator(movie.imdb_rating, movie.metascore)}
        </div>
      </div>
      <div>
        <h5 className="text-neutral-400 mb-2 lg:mb-2">
          <FontAwesomeIcon icon={faThLarge} /> Gernes
        </h5>
        <div className="flex gap-1 lg:gap-2  flex-wrap">
          {blackTextCardCreator(genres)}
        </div>
      </div>
      <div>
        <h5 className="text-neutral-400 mb-2 lg:mb-2"> Director</h5>
        <div className="blackCard p-2">
          {" "}
          <div className="flex gap-3 lg:gap-4 items-center p-2">
            {/* <div className="rounded-lg overflow-hidden  h-16 lg:h-20 2xl:h-24 ">
              <img
                className="object-cover w-full h-full"
                src={directorsample}
                alt=""
              />
            </div> */}
            <div>
              <h6 className=" text-sm lg:text-base">{movie.director}</h6>
              {/* <p className="text-neutral-400 text-xs"> From India</p> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-neutral-400 mb-2 lg:mb-2"> Writer</h5>
        <div className="blackCard p-2">
          {" "}
          <div className="flex gap-3 lg:gap-4 items-center p-2">
            {/* <div className="rounded-lg overflow-hidden  h-16 lg:h-20 2xl:h-24 ">
              <img
                className="object-cover w-full h-full"
                src={directorsample}
                alt=""
              />
            </div> */}
            <div>
              <h6 className=" text-sm lg:text-base">{movie.writer}</h6>
              {/* <p className="text-neutral-400 text-xs"> From India</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
