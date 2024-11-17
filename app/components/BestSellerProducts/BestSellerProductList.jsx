'use client'
import { useRecoilValueLoadable } from "recoil";
import CardCategory from "../CardsCategories/CardCategory";
import { isBestSellerProductsListSelector } from "@/lib/recoil/selectors/selectors";

export default function BestSellerProductsList() {
    const bestSellerProductsLoadable = useRecoilValueLoadable(isBestSellerProductsListSelector);

    if (bestSellerProductsLoadable.state === 'hasError') return <p>Error loading categories</p>;
    const items = bestSellerProductsLoadable.contents.data

    if (bestSellerProductsLoadable.state === "loading")
        return (
          <>
            <div className="m-2 w-3/12 md:w-2/12 lg:w-[14%] overflow-hidden shrink-0 bg-red ">
              <div className="flex flex-col ">
                <div className="bg-[#f3f3f3] rounded-full overflow-hidden h-[100px] md:h-[120px] lg:h-[140px] "></div>
                <div className="text-center p-4 lg:text-[16px] font-bold"></div>
              </div>
            </div>
            <div className="m-2 w-3/12 md:w-2/12 lg:w-[14%] overflow-hidden shrink-0 bg-red ">
              <div className="flex flex-col ">
                <div className="bg-[#f3f3f3] rounded-full overflow-hidden h-[100px] md:h-[120px] lg:h-[140px] "></div>
                <div className="text-center p-4 lg:text-[16px] font-bold"></div>
              </div>
            </div>
            <div className="m-2 w-3/12 md:w-2/12 lg:w-[14%] overflow-hidden shrink-0 bg-red ">
              <div className="flex flex-col ">
                <div className="bg-[#f3f3f3] rounded-full overflow-hidden h-[100px] md:h-[120px] lg:h-[140px] "></div>
                <div className="text-center p-4 lg:text-[16px] font-bold"></div>
              </div>
            </div>
          </>
        );

  return (
    <>
      <div className="mb-10 lg:mb-1">
        <div className="lg:p-[50px] relative">
          <div className="text-2xl font-bold">
            <div className="p-2">
              <h2>Shop our most top picks cards</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:flex lg:space-x-4 lg:overflow-x-scroll lg:overscroll-x-none no-scrollbar">
            <CardCategory items={items} />
          </div>
        </div>
      </div>
    </>
  );
}
