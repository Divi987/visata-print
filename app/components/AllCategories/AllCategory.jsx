export default function AllCategory ( {items}) {
    return (
        <>
        {
            items.map((item) => {
                return(
                    <>
                    <figure className="flex flex-col shrink-0 rounded-full bg-red m-2 w-3/12 md:w-2/12 lg:w-2/12">
                        <span className="bg-[#f3f3f3] rounded-full overflow-hidden">
                            <img src={item.img} alt="img" srcset="" className="" />
                        </span>
                        <figcaption className="text-center pt-4 lg:text-[16px] font-bold">{item.p}</figcaption>
                    </figure>
                    {/* <div className="flex shrink-0 rounded-full bg-red m-2 bg-[#f3f3f3]">
                       
                            <div className="">
                                <span>
                                    <img src={item.img} alt="img" srcset="" className="w-[100px]" />
                                </span>
                            </div>
                            <div className="">

                            </div>
                    </div> */}
                    </>
                )
            })
        }
        </>
    )
}