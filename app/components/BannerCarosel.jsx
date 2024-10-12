import Carousel from "./Carousel";

export default function BannerCarosel () {
    let slides = [
        "Buy 1 wall calendar, get 2 free + up to 50% off holiday cards | Ends Oct 10 ",
        "Buy more, save more | 30% off any 3+ items | Code: SAVEITEMS ",
        "Buy 1 wall calendar, get 2 free + up to 50% off holiday cards | Ends Oct 10 ",
      ];

    return (
        <>
    {/* <div id="controls-carousel" className="relative w-full" data-carousel="static">
    <div className="relative h-[60px] overflow-hidden md:h-[60px] bg-black text-white">

        <div className=" duration-700 ease-in-out flex justify-center items-center" data-carousel-item>
            <p className="text-xs lg:text-sm absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-3/4">Buy 1 wall calendar, get 2 free + up to 50% off holiday cards | Ends Oct 10 </p>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <p className="text-xs lg:text-sm absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">Buy more, save more | 30% off any 3+ items | Code: SAVEITEMS  </p>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <p className="text-xs lg:text-sm absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">Buy 1 wall calendar, get 2 free + up to 50% off holiday cards | Ends Oct 10 </p>
        </div> */}

        {/* <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div> */}

        {/* <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div> */}
    {/* </div>
    {/* <!-- Slider controls --> 
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white white:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white white:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div> */}
    <div className="w-full pt-4 m-auto bg-black text-white overflow-hidden h-[60px]">
        <Carousel slides={slides} />
    </div>
</>
    )
}