import {
  fetchCategory,
  fetchProductForCategories,
} from "@/lib/api/fetchRequest";
import Breadcrumb from "../components/Breadcrumb";
import HeroCategories from "../components/ParentCategoriesDetails/HeroCategories";
import ItemDetails from "../components/ItemDetailSection/ItemDetails";

export default async function SubCategory({ params }) {
  const slug = (await params).slug;

  {
    if (slug.length === 1) {
      return (
        <>
          <Breadcrumb />
          <HeroCategories slug={slug[0]} />
        </>
      );
    } else {
      let res = await fetchProductForCategories(slug[slug.length - 1]);
      
      if (res.data.length === 0) {
        let catRes = await fetchCategory(slug[slug.length - 1]);
          if (catRes.data.length===0) return <div>Data Not found!!</div>;

        return (
          <>
            <Breadcrumb />
            <HeroCategories slug={slug[slug.length - 1]} data={catRes} />
          </>
        );
      }

      if (res.data.length===0) return <div>Data Not found!!</div>;

      return (
        <>
          <Breadcrumb />
          <ItemDetails slug={slug[slug.length - 1]} data={res} />
        </>
      );
    }
  }
}
