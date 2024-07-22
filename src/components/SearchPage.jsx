import MovieCard from "./moviesPage/Moviecard";
import FreeTrial from "./Freetrial";
export default function SearchPage({ movies }) {
  return (
    <>
      <div className="my-20 border border-stone-700 flex flex-col justify-center rounded-lg p-6 text-white mb-4 relative">
        <div className="absolute bg-red-700 rounded-lg -top-4 left-5 text-center p-2 pt-1 text-sm">
          {" "}
          Search results
        </div>
        {movies.length > 0 ? (
          <div className="flex flex-wrap justify-center  mt-7 gap-7">
            {movies.map((movie) => (
              <div key={movie.id} className="max-w-80">
                <MovieCard
                  title={movie.title}
                  poster={movie.poster}
                  id={movie.id}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white my-6">
            Sorry, the movie you have searched for, does not exist!
          </p>
        )}
      </div>
      <FreeTrial />
    </>
  );
}
