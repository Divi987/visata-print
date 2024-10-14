import CardCategory from "./CardCategory";

export default function CardsCategories() {
  let items = {
    item: [
      {
        img: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001836391/MXP32377-NA-Homepage-October-VistaPrint-Picks-Product-Tile-Hybrid-Holiday-Cards-001",
        p: "Holiday Cards",
        discount: "Up to 40% off",
      },
      {
        img: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001649863/GNA-38-rcbc-MERAKI-red-001",
        p: "Business Cards",
        discount: "",
      },
      {
        img: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001822554/MXP32552-Sept30-October-VP-on-Sale-Biz-Postcard-Product-Tile-001",
        p: "Postcards",
        discount: "",
      },
      {
        img: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001641892/MXP22912-Aug-28-PrepSzn-ProductTile-VinylBanner-001",
        p: "Banner",
        discount: "",
      },
      {
        img: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001822560/MXP32552-Sept30-October-VP-on-Sale-Biz-T-shirt-Product-Tile-001",
        p: "TShirts",
        discount: "",
      },
      {
        img: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001704789/MXP26584-Jan8-Homepage-Category-Tile-Postcards-001?cb=cfa8d1b638701affc076140a9ba5892c2a9a95e7",
        p: "Wall Calenders",
        discount: "",
      },
    ],
  };

  return (
    <>
      <div className="mb-11 lg:mb-14">
        <div className="lg:p-[50px] relative">
          <div className="text-2xl font-bold">
            <div className="p-2">
              <h2>Shop holiday cards, calendars & more top picks</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:flex lg:space-x-4 lg:overflow-x-scroll lg:overscroll-x-none no-scrollbar">
            <CardCategory items={items.item} />
          </div>
        </div>
      </div>
    </>
  );
}
