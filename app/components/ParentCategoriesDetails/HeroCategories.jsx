export default function HeroCategories () {
    let bg = "bg-[#EDE3CF]"
    return (
        <>
            <div className="mb-4">
                <div className={`min-h-[300px] ${bg} p-4 flex flex-col md:flex-row gap-4 md:justify-between`}>
                    <nav className="hidden"></nav>
                    <div className="py-4 w-full md:w-2/4 items-center m-auto">
                        <p className="text-3xl font-bold ">Marketing Material</p>
                        <div className="description mt-3 text-sm">
                            <p>Meet customers where they are with custom marketing materials – in the mail, at events or on the street.</p>
                        </div>
                    </div>
                    <div className="imageContainer w-full md:w-2/4 m-auto">
                        <div className="h-[100%]">
                            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,w_384/legacy_dam/en-us/S001836954/NPIB34965-Holiday-MarketingMaterials-L2-MM-Global" alt="img" className="rounded-xl w-full object-cover object-center" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}