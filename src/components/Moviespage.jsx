import HighlightedMovie from "./Highlightedmovie";
import OurMovies from "./Ourmovies";
import FreeTrial from "./Freetrial";
import avengersImage from "../assets/suggestedMovieSample.png";

export default function MoviesPage() {
  const item = [
    {
      name: "Avengers : Endgame",
      description:
        "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.",
      image: avengersImage,
    },
  ];
  return (
    <>
      <HighlightedMovie
        name={item[0].name}
        image={item[0].image}
        description={item[0].description}
      />
      <OurMovies />
      <FreeTrial />
    </>
  );
}
