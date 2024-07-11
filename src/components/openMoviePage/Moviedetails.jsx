import Cast from "./Cast";
import Description from "./Dscription";
import Reviews from "./Reviews";
import MovieData from "./MovieData";

import {} from "@fortawesome/free-solid-svg-icons";

export default function MovieDetails() {
  return (
    <>
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-2 lg:gap-4 text-white text-xs lg:text-sm">
        <div className="lg:col-span-2 flex flex-col gap-3 lg:gap-4">
          {" "}
          <Description />
          <div className="flex flex-col gap-4  bg-neutral-800 rounded-lg p-6  lg:col-span-1  border border-neutral-700 lg:hidden ">
            <MovieData />
          </div>
          <Cast />
          <Reviews />
        </div>

        <div className=" bg-neutral-800 lg:col-span-1 hidden lg:flex flex-col gap-6 self-start rounded-lg border border-neutral-700 p-6">
          <MovieData />
        </div>
      </div>
      ;
    </>
  );
}
