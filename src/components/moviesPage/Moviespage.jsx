import HighlightedMovie from "../Highlightedmovie";
import OurMovies from "./Ourmovies";
import FreeTrial from "../Freetrial";

export default function MoviesPage({
  movies = [],
  metaData,
  page = 1,
  onPageChange,
}) {
  const totalPages = metaData.page_count;

  const item = movies.slice(0, 5).map((movie) => ({
    id: movie.id,
    name: movie.title,
    description: movie.year,
    image: movie.images[0],
  }));

  return (
    <>
      <HighlightedMovie movie={item} />
      <OurMovies
        movies={movies}
        currentPage={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      <FreeTrial />
    </>
  );
}
