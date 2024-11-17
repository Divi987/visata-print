import CardCategory from "./CardCategory";

export default function CardsCategories() {
  let items = {
    item: [
      {
        image:{
          url: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001836391/MXP32377-NA-Homepage-October-VistaPrint-Picks-Product-Tile-Hybrid-Holiday-Cards-001",
          height: 150,
          width: 150
        },
        slug: "1",
        name: "Holiday Cards",
        discount: "Up to 40% off",
      },
      {
        image:{
          url: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001649863/GNA-38-rcbc-MERAKI-red-001",
           height: 150,
          width: 150
        },
        slug: "1",
        name: "Business Cards",
        discount: "",
      },
      {
        image:{
          url: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001822554/MXP32552-Sept30-October-VP-on-Sale-Biz-Postcard-Product-Tile-001",
           height: 150,
          width: 150
        },
        slug: "1",
        name: "Postcards",
        discount: "",
      },
      {
        image:{
          url: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001641892/MXP22912-Aug-28-PrepSzn-ProductTile-VinylBanner-001",
           height: 150,
          width: 150
        },
        slug: "1",
        name: "Banner",
        discount: "",
      },
      {
        image:{
          url: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001822560/MXP32552-Sept30-October-VP-on-Sale-Biz-T-shirt-Product-Tile-001",
           height: 150,
          width: 150
        },
        slug: "1",
        name: "TShirts",
        discount: "",
      },
      {
        image:{
          url: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_600/legacy_dam/en-us/S001704789/MXP26584-Jan8-Homepage-Category-Tile-Postcards-001?cb=cfa8d1b638701affc076140a9ba5892c2a9a95e7",
           height: 150,
          width: 150
        },
        slug: "1",
        name: "Wall Calenders",
        discount: "",
      },
    ],
  };

  return (
    <>
      <div className="mb-10 lg:mb-1">
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
