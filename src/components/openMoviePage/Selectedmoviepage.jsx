import FreeTrial from "../Freetrial";
import HighlightedMovie from "../Highlightedmovie";
import Kantrabanner from "../../assets/Kantrabanner.png";
import MovieDetails from "./Moviedetails";


export default function SelectedMovie() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  scrollToTop();

  const item = [
    {
      name: "Kantara",
      description:
        "A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.",
      image: Kantrabanner,
    },
  ];

  return (
    <>
      <HighlightedMovie
       movie={item}
      />
      <MovieDetails />

      <FreeTrial />
    </>
  );
}
