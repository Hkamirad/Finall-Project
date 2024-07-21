import { useLoaderData, useSearchParams } from "react-router-dom";
import { getMoviesList } from "../api/moviesList";
import MoviesPage from "../components/moviesPage/Moviespage";

export async function loader({ request }) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")) || 1;
  const { data } = await getMoviesList(page);
  return { movies: data.data, page, metaData: data.metadata };
}

export default function MoviesPageRout() {
  const { movies, metaData, page } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const scrollToOurmovies = () => {
    if (window.innerWidth < 1024) {
      window.scrollTo({ top: 530 });
    } else {
      window.scrollTo({ top: 800 });
    }
  };
  const onPageChange = (page) => {
    setSearchParams({ page });
    scrollToOurmovies();
  };
  return (
    <MoviesPage
      movies={movies}
      metaData={metaData}
      page={page}
      onPageChange={onPageChange}
    />
  );
}
