import { productsFilterByCategorySelector } from "@/lib/recoil/selectors/selectors";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import CardCategory from "../../CardsCategories/CardCategory";
import { listOfProductsByCategoryState } from "@/lib/recoil/atoms/states";

export default function ListOfProductsByCategory ({name, slug}){
    const productsListByCategoryLoadable = useRecoilValueLoadable(productsFilterByCategorySelector);

    if (productsListByCategoryLoadable.state === 'hasError') return <p>Error loading categories</p>;
    if (productsListByCategoryLoadable.state === 'loading') return <p>loading products</p>;

    return (
        <div className="mb-10 lg:mb-1">
        <div className="lg:p-[50px] relative">
          <div className="text-2xl font-bold">
            <div className="p-2">
              <h2>Explore top picks for {name} </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:flex lg:space-x-4 lg:overflow-x-scroll lg:overscroll-x-none no-scrollbar">
            <CardCategory items={productsListByCategoryLoadable.contents?.data} hrefC={slug} />
          </div>
        </div>
      </div>
    )
}