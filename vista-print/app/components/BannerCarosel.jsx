import Carousel from "./Carousel";

export default function BannerCarosel() {
  let slides = [
    "Buy 1 wall calendar, get 2 free + up to 50% off holiday cards | Ends Oct 10 ",
    "Buy more, save more | 30% off any 3+ items | Code: SAVEITEMS ",
    "Buy 1 wall calendar, get 2 free + up to 50% off holiday cards | Ends Oct 10 ",
  ];

  return (
    <>
      <div className="w-full pt-4 m-auto bg-black text-white overflow-hidden h-[60px]">
        <Carousel slides={slides} />
      </div>
    </>
  );
}
