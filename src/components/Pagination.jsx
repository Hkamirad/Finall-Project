import { Pagination as FlowbitePagination } from "flowbite-react";

const customTheme = {
  base: "",
  layout: {
    table: {
      base: "text-sm text-gray-700 dark:text-gray-400 ",
      span: "font-semibold text-gray-900 dark:text-white",
    },
  },
  pages: {
    base: "xs:mt-0 mt-2 inline-flex items-center mb-2 lg:mb-5  -space-x-px gap lg:gap-2 2xl:gap-3 ",
    showIcon: "inline-flex hidden lg:block",
    previous: {
      base: "  ml-0 lg:rounded-full lg:border lg:border-neutral-600 lg:bg-neutral-800 lg:mr-2 lg:px-3 lg:py-3 leading-tight text-gray-500 lg:enabled:hover:bg-neutral-600 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-7 w-7 lg:h-5 lg:w-5",
    },
    next: {
      base: "hidden  lg:rounded-full lg:border lg:border-neutral-600 lg:bg-neutral-800 lg:ml-2 lg:px-3 lg:py-3  text-gray-500 lg:enabled:hover:bg-neutral-600 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white hidden ",
      icon: "h-7 w-7 lg:h-5 lg:w-5",
    },
    selector: {
      base: "w-5  bg-neutral-700 pt-1 rounded leading-tight text-gray-500 enabled:hover:bg-neutral-400  enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      active:
        "w-7 lg:w-9 bg-red-600 text-cyan-600  hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      disabled: "cursor-not-allowed opacity-50",
    },
  },
};

const highlightedMovieTheme = {
  ...customTheme,
  pages:{
    ...customTheme.pages,
    previous:{
      ...customTheme.pages.previous,
      base:"absolute bottom-0 left-5 ml-0 lg:rounded-full lg:border lg:border-neutral-600 lg:bg-neutral-800 lg:mr-2 lg:px-3 lg:py-3 leading-tight text-gray-500 lg:enabled:hover:bg-neutral-600 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white"
    },
    next:{
      ...customTheme.pages.previous,
      base:"absolute bottom-0 right-5 ml-0 lg:rounded-full lg:border lg:border-neutral-600 lg:bg-neutral-800 lg:mr-2 lg:px-3 lg:py-3 leading-tight text-gray-500 lg:enabled:hover:bg-neutral-600 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white"
    }
  }
}
export default function Pagination({ currentPage, totalPages, onPageChange, HighlightedMovies}) {
  return (
    <FlowbitePagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
      theme={!HighlightedMovies ? customTheme : highlightedMovieTheme  }
      color="primary"
      className="text-zero "
      showIcons
    />
  );
}
