import MovieCard from "./Moviecard";
export default function OurMovies() {
  return (
    <>
      <div className="my-10 border border-stone-700 rounded-lg p-6 text-white mb-4 relative">
        <div className="absolute bg-red-700 rounded-lg -top-4 left-5 text-center p-2 pt-1 text-sm">
          {" "}
          Movies
        </div>
        <h4 className=" font-bold mt-2 mb-5">Our Movies</h4>
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 ">
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
        </div>
      </div>
    </>
  );
}
