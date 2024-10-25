import Breadcrumb from "@/app/components/Breadcrumb";
import ItemDetails from "@/app/components/ItemDetailSection/ItemDetails";

export default function ProductPage () {

    // const {categoryName, productName} =  params;
    return (
        <div className="px-8">
            <Breadcrumb />
            <ItemDetails />
        </div>
    )
}