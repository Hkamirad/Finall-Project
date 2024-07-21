import { Link } from "react-router-dom";

export default function MovieCard({ title, poster, id }) {
  return (
    <>
      <Link to={`/movies/${id}`}>
        <div className="border border-stone-700 bg-neutral-800 text-white p-3 lg:p-4 2xl:p-5 rounded-lg cursor-pointer hover:scale-105 duration-100">
          <div className="flex flex-col">
            <div className="flex items-center justify-center text-stone-400 mb-4 text-xs lg:text-base 2xl:text-lg font-bold text-center">
              <p>
                Rank <span className="text-stone-200 italic mr-1"> {id} </span>{" "}
                in Top 250
              </p>
            </div>
            <img className="rounded-lg mb-3 lg:mb-4" src={poster} alt="" />
          </div>
          <div className="flex justify-center flex-col lg:flex-row items-center">
            <div className="flex  items-center text-stone-400   text-center">
              <p>{title}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
