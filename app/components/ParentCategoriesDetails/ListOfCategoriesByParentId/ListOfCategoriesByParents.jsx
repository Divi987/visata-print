import { categoryFilterByParentSelector } from "@/lib/recoil/selectors/selectors";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import AllCategory from "../../AllCategories/AllCategory";
import { listOfProductsByCategoryState } from "@/lib/recoil/atoms/states";

export default function ListOfCategoriesByParent ({ name, slug }) {
  // const [selectedProductsByCategory, setSelectedProductsByCategory] = useRecoilState(listOfProductsByCategoryState);
    
  // if(id) {
  //     setSelectedProductsByCategory(id);
  // }
    let previousSlide = () => {
        // if (current === 0) setCurrent(items.item.length - 5);
        // else setCurrent(current - 1);
      };
    
      let nextSlide = () => {
        // if (current === items.item.length - 5) setCurrent(0);
        // else setCurrent(current + 1);
      };
    const categoriesByParentLoadable = useRecoilValueLoadable(categoryFilterByParentSelector);
      if (categoriesByParentLoadable.state === 'hasError') return <p>Error loading categories</p>;
 
    return (
      <>
      
      {(categoriesByParentLoadable.contents?.data?.length === 0) ? 
        <></>
        :
        <div className="mb-10 lg:mb-1">
      <div className="lg:p-[50px] relative">
        <div className="text-2xl font-bold">
          <div className="p-2">
            <h2>Explore all categories Under {name} </h2>
          </div>
        </div>
        <div className="flex space-x-4 overflow-x-scroll overscroll-x-none no-scrollbar">
          <button
            // disabled={current === 0}
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
          <AllCategory items={categoriesByParentLoadable} current={0} hrefC={slug} />
          <button
          // disabled={current === (items.item.length -1)}
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
      }
     </>
    )
}