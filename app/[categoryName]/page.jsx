'use client'
import { useParams } from "next/navigation";
import Breadcrumb from "../components/Breadcrumb";
import HeroCategories from "../components/ParentCategoriesDetails/HeroCategories";

export default function SubCategory ({ params }) {

    return(
        <>
        <Breadcrumb />
        <HeroCategories />
        </>
    )
}