import MovieCard from "./Moviecard";
import Pagination from "../Pagination";
export default function OurMovies() {
  return (
    <>
      <div className="my-10 border border-stone-700 rounded-lg p-6 text-white mb-4 relative">
        <div className="absolute bg-red-700 rounded-lg -top-4 left-5 text-center p-2 pt-1 text-sm">
          {" "}
          Movies
        </div>
        
        <div>
          <div className="grid grid-cols-2 mt-3 md:grid-cols-3 lg:grid-cols-4 gap-3 2xl:gap-5 ">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
          <div className="flex justify-center mt-10">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}
