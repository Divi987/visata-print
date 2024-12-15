'use client'
import { useState } from "react";
import AllCategory from "./AllCategory";
import style from "../navbarStyles.module.css";
// import { useEffect, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { categoryStateSelector } from "@/lib/recoil/selectors/selectors";
import { fetchCategories } from "@/lib/api/fetchRequest";

export default function AllCategories() {
  const categoriesLoadable = useRecoilValueLoadable(categoryStateSelector);

  // if (categoriesLoadable.state === 'loading') return <p>Loading categories...</p>;
  if (categoriesLoadable.state === 'hasError') return <p>Error loading categories</p>;

  let items = categoriesLoadable.contents.data;
  
  let [current, setCurrent] = useState(0);

//   Use page % instead of items length
  let previousSlide = () => {
    if (current === 0) setCurrent(items.length - 1);
    else setCurrent(current - 1);
    // if (current === 0) setCurrent(items.item.length - 5);
    // else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === items.length - 1) setCurrent(0);
    else setCurrent(current + 1);
    // if (current === items.item.length - 5) setCurrent(0);
    // else setCurrent(current + 1);
  };


  return (
    <div className="mb-10 lg:mb-1">
      <div className="lg:p-[50px] relative">
        <div className="text-2xl font-bold">
          <div className="p-2">
            <h2>Explore all categories</h2>
          </div>
        </div>
        <div className="flex space-x-4 overflow-x-scroll no-scrollbar">
          <button
            disabled={current === 0}
            onClick={previousSlide}
            type="button"
            className="absolute top-0 start-0 left-2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none bg-white ">
              <svg
                className="text-black w-4 h-4 white:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <AllCategory items={categoriesLoadable} current={current} />
          <button
          disabled={current === (categoriesLoadable.contents?.data?.length -1)}
          onClick={nextSlide}
            type="button"
            className="absolute top-0 end-0 right-2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="bg-white inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-black white:text-gray-800 rtl:rotate-180 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}