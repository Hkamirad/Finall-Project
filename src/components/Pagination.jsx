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
    base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px gap-1",
    showIcon: "inline-flex",
    previous: {
      base: "ml-0 lg:rounded-full lg:border lg:border-neutral-600 lg:bg-neutral-800 lg:mr-2 lg:px-3 lg:py-3 leading-tight text-gray-500 lg:enabled:hover:bg-neutral-600 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-7 w-7 lg:h-5 lg:w-5",
    },
    next: {
      base: " lg:rounded-full lg:border lg:border-neutral-600 lg:bg-neutral-800 lg:ml-2 lg:px-3 lg:py-3  text-gray-500 lg:enabled:hover:bg-neutral-600 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-7 w-7 lg:h-5 lg:w-5",
    },
    selector: {
      base: "w-5  bg-neutral-700 pt-1 rounded leading-tight text-gray-500 enabled:hover:bg-neutral-400  enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      active:
        "w-7 bg-red-600 text-cyan-600  hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      disabled: "cursor-not-allowed opacity-50",
    },
  },
};
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <FlowbitePagination
      currentPage={2}
      totalPages={10}
      onPageChange={onPageChange}
      theme={customTheme}
      color="primary"
      className="text-zero "
      showIcons
    >
      Click me
    </FlowbitePagination>
  );
}
