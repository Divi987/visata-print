import Image from "next/image";
import Link from "next/link";

export default function CardCategory ( {items, hrefC=""} ) {
    return(
        <>
             {items?.map((item) => {
        return (
          <>
            <figure key={item._id} className="flex flex-col lg:shrink-0 m-3 w-full md:w-[14%]"
            >
              <span className="bg-[#f3f3f3]  lg:overflow-hidden rounded-3xl">
                {/* <img src={item.image.url} alt="img" srcset="" className="rounded-3xl lg:rounded-none" /> */}
                <Image
                  src={
                    item.image
                      ? item.image?.url
                      : "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001705599/MXP26584-Jan8-Homepage-Category-Tile-BC-002?cb=8ec2cd87bd754846557e35a61359fcca3f1f0491"
                  }
                  alt="img"
                  srcSet=""
                  className="object-cover h-full"
                  height={item.image ? item.image?.height : 150}
                  width={item.image ? item.image?.width : 150}
                />
              </span>
              <Link
                href={hrefC === "" ? item.slug : `${hrefC}/${item.slug}`}
                className="hover:text-blue-700"
              >
                <figcaption className=" pt-4 lg:text-[16px] font-bold">
                  {item.name}
                </figcaption>
              </Link>
            </figure>
          </>
        );
      })}
        </>
    )
}