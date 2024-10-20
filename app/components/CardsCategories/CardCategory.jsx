export default function CardCategory ( {items} ) {
    return(
        <>
             {items.map((item) => {
        return (
          <>
            <figure className="flex flex-col lg:shrink-0 m-3 w-full lg:w-[14%]"
            >
              <span className="bg-[#f3f3f3]  lg:overflow-hidden rounded-3xl">
                <img src={item.img} alt="img" srcset="" className="rounded-3xl lg:rounded-none" />
              </span>
              <figcaption className=" pt-4 lg:text-[16px] font-bold">
                {item.p}
              </figcaption>
            </figure>
          </>
        );
      })}
        </>
    )
}