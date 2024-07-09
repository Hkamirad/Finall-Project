import FreeTrial from "./Freetrial";
import HighlightedMovie from "./Highlightedmovie";
import Kantrabanner from "../assets/Kantrabanner.png";

export default function SelectedMovie() {
  const item = [
    {
      name: "Kantara",
      description:
        "A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.",
      image: Kantrabanner,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  //scrollToTop();
  const movieDataCreator = () => {
    return (
      <>
        <p>bye</p>
        <p>bye</p>
        <p>bye</p>
        <p>bye</p>
        <p>bye</p>
        <p>bye</p>
        <p>bye</p>
        <p>bye</p>
        <p>bye</p>
        <p>bye</p>
        <p>bye</p>
        <p>bye</p>
        <p>bye</p>
      </>
    );
  };
  return (
    <>
      <HighlightedMovie
        name={item[0].name}
        image={item[0].image}
        description={item[0].description}
      />
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-2 text-white">
        <div className="lg:col-span-2 flex flex-col gap-2">
          {" "}
          <div className="bg-zinc-900 rounded-lg border border-neutral-800">
            <p>saaaa</p>
            <p>saaaa</p>
            
          </div>
          <div className="bg-zinc-900  lg:col-span-1 lg:hidden ">
            {movieDataCreator()}
          </div>
          <div className="bg-zinc-900 rounded-lg border border-neutral-800">
            salam
          </div>
          <div className="bg-zinc-900 rounded-lg border border-neutral-800">
            <p>saaaa</p>
            
          </div>
        </div>

        <div className="bg-zinc-900 lg:col-span-1 hidden lg:block self-start rounded-lg border border-neutral-800">
          {movieDataCreator()}
        </div>
      </div>
      <FreeTrial />
    </>
  );
}
