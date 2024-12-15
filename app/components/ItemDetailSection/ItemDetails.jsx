import Link from "next/link";
import ItemDetailsQtyContainer from "./ItemDetailsQtyContainer";
import Image from "next/image";
import ELearn from '../../../public/images/E-Learn.jpg'

export default function ItemDetails({ slug, data}) {
  
  return (
    <>
      <div className="mainItems md:grid md:grid-cols-12 md:gap-4 p-2">
        <div className="img md:col-span-7 h-screen sticky md:top-[20px] ">
          <figure className="w-full rounded-lg px-2 object-cover w-full">
            <Image
            src={ELearn}
            className="rounded-2xl h-full max-h-full object-cover w-full"
            alt="mImg"
             />
            {/* <img
              src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/en-us/S001823476/NPIB-24059-17Oz-Mug-Hero-001"
              alt="mainlogo"
              srcset=""
              className="rounded-2xl h-full max-h-full object-cover w-full"
            /> */}
          </figure>
          <div className="btnSmall">
            <ul className="flex">
              <li>
                <button className="w-1/4 h-[10px] bg-red">
                  {" "}
                  <span>
                    <img className="" src="https://cms.cloudinary.vpsvc.com/images/c_lfill,dpr_auto,f_auto,g_xy_center,h_100,q_auto:good,w_100,x_800,y_200/legacy_dam/en-us/S001823476/NPIB-24059-17Oz-Mug-Hero-001" alt="" srcset="" />
                  </span>
                </button>
              </li>
              <li>
                <button>
                  {" "}
                  <span>
                    <img src="https://cms.cloudinary.vpsvc.com/images/c_lfill,dpr_auto,f_auto,g_xy_center,h_100,q_auto:good,w_100,x_800,y_200/legacy_dam/en-us/S001823500/NPIB-24059-17-Oz-Mug-Referential-001_EN-USNPIB-24059-17-Oz-Mug-Referential-001" alt="" srcset="" />
                  </span>
                </button>
              </li>
              <li>
                <button>
                  {" "}
                  <span>
                    <img src="https://cms.cloudinary.vpsvc.com/images/c_lfill,dpr_auto,f_auto,g_xy_center,h_100,q_auto:good,w_100,x_800,y_200/legacy_dam/en-us/S001823476/NPIB-24059-17Oz-Mug-Hero-001" alt="" srcset="" />
                  </span>
                </button>
              </li>
              <li>
                <button>
                  {" "}
                  <span>
                    <img src="https://cms.cloudinary.vpsvc.com/images/c_lfill,dpr_auto,f_auto,g_xy_center,h_100,q_auto:good,w_100,x_800,y_200/legacy_dam/en-us/S001823500/NPIB-24059-17-Oz-Mug-Referential-001_EN-USNPIB-24059-17-Oz-Mug-Referential-001" alt="" srcset="" />
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightContent md:col-span-5 px-3 py-2 overflow-y-auto">
          <div>
            <h1 className="text-2xl font-bold mb-3">Tall Latte Mugs</h1>
            <div className="mb-3">
              <span className="rounded-full py-1 px-2 bg-green-800 text-white text-[12px] font-bold">20% off</span>
            </div>
          </div>
          <div className="text-sm">
            <span className="leading-6">
              Make coffee breaks last longer with tall latte mugs, generously
              sized and crafted from quality ceramic.
            </span>
            <br />
            <Link href="#" className="underline">See details </Link>
          </div>
          <div>
            <ItemDetailsQtyContainer id={slug} />
          </div>
        </div>
      </div>
    </>
  );
}
