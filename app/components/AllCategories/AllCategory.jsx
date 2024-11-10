import Image from "next/image";
import Link from "next/link";

export default function AllCategory({ items, current }) {

  if (items.state === 'loading') return  (
<>
    <div className="m-2 w-3/12 md:w-2/12 lg:w-[14%] overflow-hidden shrink-0 bg-red ">
    <div className="flex flex-col ">
    <div className="bg-[#f3f3f3] rounded-full overflow-hidden h-[100px] md:h-[120px] lg:h-[140px] ">
    </div>
    <div className="text-center p-4 lg:text-[16px] font-bold"></div>    
    </div>
  </div>
   <div className="m-2 w-3/12 md:w-2/12 lg:w-[14%] overflow-hidden shrink-0 bg-red ">
   <div className="flex flex-col ">
   <div className="bg-[#f3f3f3] rounded-full overflow-hidden h-[100px] md:h-[120px] lg:h-[140px] ">
   </div>
   <div className="text-center p-4 lg:text-[16px] font-bold"></div>    
   </div>
 </div>
  <div className="m-2 w-3/12 md:w-2/12 lg:w-[14%] overflow-hidden shrink-0 bg-red ">
  <div className="flex flex-col ">
  <div className="bg-[#f3f3f3] rounded-full overflow-hidden h-[100px] md:h-[120px] lg:h-[140px] ">
  </div>
  <div className="text-center p-4 lg:text-[16px] font-bold"></div>    
  </div>
</div>
</>
  )
  return (
    <>
      {items.contents.data?.map((item) => {
        return (
          <>
            <Link
            key={item._id}
              href={item.slug}
              className="m-2 w-3/12 md:w-2/12 lg:w-[14%] overflow-hidden shrink-0 bg-red "
            >
              <figure
                
                className="flex flex-col "
                style={{
                  transform: `translateX(-${current * 100}%)`,
                }}
              >
                <span className="bg-[#f3f3f3] rounded-full overflow-hidden h-[100px] md:h-[120px] lg:h-[140px] xl:h-[160px] ">
                  {/* <img
                    src={
                      item.image
                        ? item.image?.url
                        : "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001705599/MXP26584-Jan8-Homepage-Category-Tile-BC-002?cb=8ec2cd87bd754846557e35a61359fcca3f1f0491"
                    }
                    alt="img"
                    srcset=""
                    className="object-cover h-full md:h-full md:h-[128px]"
                  /> */}
                  <Image
                  src={
                    item.image
                      ? 
                      item.image?.url
                      : "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001705599/MXP26584-Jan8-Homepage-Category-Tile-BC-002?cb=8ec2cd87bd754846557e35a61359fcca3f1f0491"
                  }
                  alt="img"
                  srcSet=""
                  className="object-cover h-full"
                  height={item.image ? item.image?.height : 150}
                  width={item.image ? item.image?.width : 150}
                  />
                </span>
                <figcaption className="text-center pt-4 lg:text-[16px] font-bold">
                  {item.name}
                </figcaption>
              </figure>
            </Link>
          </>
        );
      })}
    </>
  );
}
