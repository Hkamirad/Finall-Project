import SearchPage from "../components/SearchPage";
import { getSerachedMovie } from "../api/searchMovie";
import { useLoaderData } from "react-router-dom";

export async function Loader({ request }) {
  const url = new URL(request.url);
  const searchedMovie = url.searchParams.get("query");
  const decodedMovie = decodeURIComponent(searchedMovie);
  const { data } = await getSerachedMovie(decodedMovie);
  return { movies: data.data };
}
export default function SearchPageRout() {
  const { movies } = useLoaderData();
  return <SearchPage movies={movies} />;
}
