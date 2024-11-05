import Link from "next/link"
import AllCategories from "../AllCategories/AllCategories"

export default function HeroCategories () {
    let bg = "bg-[#EDE3CF]"
    return (
        <>
            <div className="mb-4 relative">
                <div className={`min-h-[300px] ${bg} p-4 flex flex-col md:flex-row gap-4 md:justify-between`}>
                    <nav className="hidden lg:block bg-white p-6 absolute left-[32px] lg:w-[22%] rounded-t-2xl">
                        <h2 className="text-xl font-bold my-4">Invitations, Stationery & Home</h2>
                        <div>
                            <hr className="mt-2 mb-3" />
                            <h3 className="py-3 font-bold text-lg">Invitations & Cards</h3>
                            <ul className="gap-14">
                                <li><Link href="#" className="py-1 leading-4">Inviations</Link></li>
                                <li><Link href="#" className="py-1 leading-4">Thank you Cards</Link></li>
                                <li><Link href="#" className="py-1 leading-4">Party Supplies</Link></li>
                                <li><Link href="#" className="py-1 leading-4">Shop all</Link></li>
                            </ul>
                        </div>
                        <div>
                            <hr className="mt-2 mb-3" />
                            <h3 className="py-3 font-bold text-lg">Invitations & Cards</h3>
                            <ul className="gap-14">
                                <li><Link href="#" className="py-1 leading-4">Inviations</Link></li>
                                <li><Link href="#" className="py-1 leading-4">Thank you Cards</Link></li>
                                <li><Link href="#" className="py-1 leading-4">Party Supplies</Link></li>
                                <li><Link href="#" className="py-1 leading-4">Shop all</Link></li>
                            </ul>
                        </div>
                        <div>
                            <hr className="mt-2 mb-3" />
                            <h3 className="py-3 font-bold text-lg">Invitations & Cards</h3>
                            <ul className="gap-14">
                                <li><Link href="#" className="py-1 leading-4">Inviations</Link></li>
                                <li><Link href="#" className="py-1 leading-4">Thank you Cards</Link></li>
                                <li><Link href="#" className="py-1 leading-4">Party Supplies</Link></li>
                                <li><Link href="#" className="py-1 leading-4">Shop all</Link></li>
                            </ul>
                        </div>
                        <div>
                            <hr className="mt-2 mb-3" />
                            <h3 className="py-3 font-bold text-lg">Invitations & Cards</h3>
                            <ul className="gap-14">
                                <li><Link href="#" className="py-1 leading-4">Inviations</Link></li>
                                <li><Link href="#" className="py-1 leading-4">Thank you Cards</Link></li>
                                <li><Link href="#" className="py-1 leading-4">Party Supplies</Link></li>
                                <li><Link href="#" className="py-1 leading-4">Shop all</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="lg:ml-[25%] py-4 w-full md:w-2/4 items-center m-auto">
                        <p className="text-3xl font-bold ">
                            <Link href="Hello">
                            Invitations, Stationery & Home </Link>
                        </p>
                        <div className="description mt-3 text-sm">
                            <p>Meet customers where they are with custom marketing materials – in the mail, at events or on the street.</p>
                        </div>
                        <div className="button-Links py-3 flex flex-wrap">
                            <Link href="#" className="rounded-lg py-2 px-3 bg-black text-white m-1" >Invitation & Cards</Link>
                            <Link href="#" className="rounded-lg py-2 px-3 bg-black text-white m-1" >Home Cards & Gifts</Link>
                            <Link href="#" className="rounded-lg py-2 px-3 bg-black text-white m-1" >Show all & Show All</Link>
                        </div>
                    </div>
                    <div className="imageContainer w-full md:w-2/4 m-auto">
                        <div className="h-[100%]">
                            <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,w_384/legacy_dam/en-us/S001836954/NPIB34965-Holiday-MarketingMaterials-L2-MM-Global" alt="img" className="rounded-xl w-full object-cover object-center" />
                        </div>
                    </div>
                </div>

                <div className="lg:ml-[25%]">
                    <AllCategories />
                    <AllCategories />
                </div>
                <AllCategories />
            </div>
        </>
    )
}