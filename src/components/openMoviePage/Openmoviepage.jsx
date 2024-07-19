import FreeTrial from "../Freetrial";
import HighlightedMovie from "../Highlightedmovie";
import MovieDetails from "./Moviedetails";

export default function OpenMovie({ movie = {} }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  scrollToTop();

  const item = [
    {
      id: movie.id,
      name: movie.title,
      description: movie.plot,
      image: movie.images[0],
    },
  ];

  return (
    <>
      <HighlightedMovie movie={item} />
      <MovieDetails movie={movie} />

      <FreeTrial />
    </>
  );
}
