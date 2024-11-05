import Breadcrumb from "@/app/components/Breadcrumb";
import ItemDetails from "@/app/components/ItemDetailSection/ItemDetails";

export default function ProductPage () {

    // const {categoryName, productName} =  params;
    return (
        <div className="md:px-8 px-4">
            <Breadcrumb />
            <ItemDetails />
        </div>
    )
}