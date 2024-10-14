'use client'
import AllCategory from "./AllCategory";
import style from "../navbarStyles.module.css";
import { useState } from "react";

export default function AllCategories() {
  let items = {
    item: [
      {
        img: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001707823/MXP-26978-CatZone-Deals-tile-001",
        p: "Signs, Banners & Poster",
      },
      {
        img: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001705599/MXP26584-Jan8-Homepage-Category-Tile-BC-002?cb=8ec2cd87bd754846557e35a61359fcca3f1f0491",
        p: "Label, Sticker & Packaging",
      },
      {
        img: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001704789/MXP26584-Jan8-Homepage-Category-Tile-Postcards-001?cb=cfa8d1b638701affc076140a9ba5892c2a9a95e7",
        p: "Home & Gifts",
      },
      {
        img: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001705594/MXP26584-Jan8-Homepage-Category-Tile-IA-002?cb=fe4051222ffe6ef77b02c6827debcdeaa45c4873",
        p: "Celebrations, Invitations & Stationaries",
      },
      {
        img: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001705599/MXP26584-Jan8-Homepage-Category-Tile-BC-002?cb=8ec2cd87bd754846557e35a61359fcca3f1f0491",
        p: "Label, Sticker & Packaging",
      },
      {
        img: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001704789/MXP26584-Jan8-Homepage-Category-Tile-Postcards-001?cb=cfa8d1b638701affc076140a9ba5892c2a9a95e7",
        p: "Home & Gifts",
      },
      {
        img: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001705594/MXP26584-Jan8-Homepage-Category-Tile-IA-002?cb=fe4051222ffe6ef77b02c6827debcdeaa45c4873",
        p: "Celebrations, Invitations & Stationaries",
      },
    ],
  };

  let [current, setCurrent] = useState(0);

//   Use page % instead of items length
  let previousSlide = () => {
    if (current === 0) setCurrent(items.item.length - 5);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === items.item.length - 5) setCurrent(0);
    else setCurrent(current + 1);
  };


  return (
    <div className="mb-11 lg:mb-14">
      <div className="lg:p-[50px] relative">
        <div className="text-2xl font-bold">
          <div className="p-2">
            <h2>Explore all categories</h2>
          </div>
        </div>
        <div className="flex space-x-4 overflow-x-scroll overscroll-x-none no-scrollbar">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <AllCategory items={items.item} current={current} />
          <button
          disabled={current === (items.item.length -1)}
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
