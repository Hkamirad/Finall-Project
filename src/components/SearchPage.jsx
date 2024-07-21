import MovieCard from "./moviesPage/Moviecard";
import FreeTrial from "./Freetrial";
export default function SearchPage({ movies }) {
  return (
    <>
      <div className="my-20 border border-stone-700 rounded-lg p-6 text-white mb-4 relative">
        <div className="absolute bg-red-700 rounded-lg -top-4 left-5 text-center p-2 pt-1 text-sm">
          {" "}
          Search results
        </div>
        {movies.length > 0 ? (
          <div className="grid grid-cols-2 mt-7 md:grid-cols-3 lg:grid-cols-4 gap-3 2xl:gap-5">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                poster={movie.poster}
                id={movie.id}
              />
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
