import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
export default function Reviews() {
  const reviewCreator = (name, country, review) => {
    return (
      <>
        <div className="blackCard p-6 ">
          <div className="flex justify-between items-center mb-3 lg:mb-4">
            <div className="flex flex-col">
              <h6>{name}</h6>
              <p className="text-xs text-neutral-400">From {country}</p>
            </div>
            <div className="flex  items-center text-stone-400 bg-neutral-900 border border-stone-700 px-2 lg:px-3 py-1 rounded-full  lg:gap-1 ">
              <FontAwesomeIcon className="text-red-700 text-xs" icon={faStar} />
              <FontAwesomeIcon className="text-red-700 text-xs" icon={faStar} />
              <FontAwesomeIcon className="text-red-700 text-xs" icon={faStar} />
              <FontAwesomeIcon className="text-red-700 text-xs" icon={faStar} />
              <FontAwesomeIcon icon={faStar} className="text-xs" />
              <p>4</p>
            </div>
          </div>
          <div>
            {" "}
            <p className="text-neutral-400">{review}</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-6 flex flex-col gap-6 lg:gap-8">
        <div className="flex justify-between items-center">
          <h5 className="text-neutral-400">Reviews</h5>
          <div className="bg-neutral-900 p-2 rounded-lg border border-neutral-700 flex gap-2 items-center cursor-pointer hover:scale-105">
            {" "}
            <FontAwesomeIcon icon={faPlus} /> <p>Add Your Review</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:gap-4 lg:grid lg:grid-cols-2">
          {reviewCreator(
            "Aniket Roy",
            "India",
            " This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it."
          )}
          {reviewCreator(
            "Swaraj",
            "India",
            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut repudiandae unde sapiente eaque ducimus aperiam, similique officiis recusandae tenetur doloribus"
          )}
        </div>
      </div>
    </>
  );
}
