import { getMovie } from "../api/singleMovie";
import OpenMovie from "../components/openMoviePage/Openmoviepage";
import { useLoaderData } from "react-router-dom";

export async function Loader({ params }) {
  const id = params.id;
  const { data } = await getMovie(id);
  return data;
}
export default function OpenMoviePageRout() {
  const data = useLoaderData();
  return <OpenMovie movie={data} />;
}
