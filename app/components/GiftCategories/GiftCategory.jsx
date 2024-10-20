import Link from "next/link";

export default function GiftCategory ( {items}) {
    return (
        <>
               {items.map((item) => {
        return (
          <>
            <figure className="flex flex-col shrink-0 m-3 w-4/12 md:w-3/12 lg:w-[14%] relative"
            >
                {
                    item.discount ? 
                    <span className="absolute rounded-full top-3 left-2 py-1 px-2 top bg-green-800 text-white text-[12px] font-bold">{item.discount}</span>
                    : <></>
                }
              <span className="bg-[#f3f3f3]  overflow-hidden rounded-3xl">
                <img src={item.img} alt="img" srcset="" className="" />
              </span>
              <figcaption className=" pt-4 lg:text-[16px] font-bold">
               <Link href={item.p} >
                    {item.p}
               </Link>
              </figcaption>
            </figure>
          </>
        );
      })}
        </>
    )
}