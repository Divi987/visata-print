import Link from "next/link";
import style from "./navbarStyles.module.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from "react";

export default function Navbar({ clicked, handleClick }) {
  // const [isClicked, setIsClicked] = useState(clicked);

  // const handleClick = () => {
  //     setIsClicked(!isClicked);
  // }

  return (
    <>
    <div className="">
      <nav
        className={`${style.nav } ${
          clicked
            ? `overflow-scroll w-full bg-white shadow-[0_0_5px_#d3d3d3] md:rounded-tr-3xl md:rounded-br-3xl absolute left-0 top-0 z-100 px-4 h-screen md:w-6/12 lg:relative lg:w-full lg:h-fit lg:shadow-none lg:rounded-none`
            : `hidden lg:block`
        } `}
      >
        {/* w-full px-4 border lg:border-0 rounded-lg 
            bg-white h-screen lg:h-fit
             lg:rounded-none shadow-[0_0_10px_#d3d3d3] lg:shadow-none md:w-6/12 
             lg:w-full absolute lg:relative left-0 top-0 z-100 lg:flex lg:justify-center lg:flex-col `} */}

        <ul className="lg:hidden flex justify-end align-end py-4 border-b-2 ">
          <li className="py-4 ">
            <button type="button" onClick={handleClick}>
              <CloseOutlinedIcon className="text-[30px]" />
            </button>
          </li>
        </ul>
        <ul className="lg:hidden border-b-2 py-4">
            <li className="py-3">
                <Link href="#" className="py-3 text-[16px]">Help is here</Link>

            </li>
            <li className="py-3">
                <Link href="#" className="py-3 text-[16px]">My Products</Link>
            </li>
            <li className="py-3">
                <Link href="#" className="py-3 text-[16px]">Sign in</Link>
            </li>
        </ul>
        <ul className="lg:items-stretch lg:flex lg:justify-between">
          <li className="py-3 lg:flex items-center lg:grow lg:list-none lg:text-center lg:px-2 lg:py-4">
            <Link href="#" className="lg:text-[14px]">
              Deals
            </Link>
          </li>
          <li className="py-3 lg:flex items-center lg:grow lg:list-none lg:text-center lg:px-2 lg:py-4 flex justify-between">
            <Link href="#" className="lg:text-[14px]">
              Holiday & Christmas Cards
            </Link>
            <ArrowForwardIosOutlinedIcon className="lg:hidden"/>
          </li>
          <li className="py-3 lg:flex items-center lg:grow lg:list-none lg:text-center lg:px-2 lg:py-4 flex justify-between">
            <Link href="#" className="lg:text-[14px]">
              Calenders & Gifts
            </Link>
            <ArrowForwardIosOutlinedIcon className="lg:hidden" />
          </li>
          <li className="py-3 lg:flex items-center lg:grow lg:list-none lg:text-center lg:px-2 lg:py-4 flex justify-between">
            <Link href="#" className="lg:text-[14px]">
              Business Cards
            </Link>
            <ArrowForwardIosOutlinedIcon className="lg:hidden" />
          </li>
          <li className="py-3 lg:flex items-center lg:grow lg:list-none lg:text-center lg:px-2 lg:py-4 flex justify-between">
            <Link href="#" className="lg:text-[14px]">
              Print Adertising & Office
            </Link>
            <ArrowForwardIosOutlinedIcon className="lg:hidden" />
          </li>
          <li className="py-3 lg:flex items-center lg:grow lg:list-none lg:text-center lg:px-2 lg:py-4 flex justify-between">
            <Link href="#" className="lg:text-[14px]">
              Signs, Banners & Posters
            </Link>
            <ArrowForwardIosOutlinedIcon className="lg:hidden" />
          </li>
          <li className="py-3 lg:flex items-center lg:grow lg:list-none lg:text-center lg:px-2 lg:py-4 flex justify-between">
            <Link href="#" className="lg:text-[14px]">
              Labels, Stickers & Packaging
            </Link>
            <ArrowForwardIosOutlinedIcon className="lg:hidden" />
          </li>
          <li className="py-3 lg:flex items-center lg:grow lg:list-none lg:text-center lg:px-2 lg:py-4 flex justify-between">
            <Link href="#" className="lg:text-[14px]">
              Clothings & Bags
            </Link>
            <ArrowForwardIosOutlinedIcon className="lg:hidden" />
          </li>
          <li className="py-3 lg:flex items-center lg:grow lg:list-none lg:text-center lg:px-2 lg:py-4 flex justify-between">
            <Link href="#" className="lg:text-[14px]">
              Promostion Products
            </Link>
            <ArrowForwardIosOutlinedIcon className="lg:hidden" />
          </li>
          <li className="py-3 lg:flex items-center lg:grow lg:list-none lg:text-center lg:px-2 lg:py-4 flex justify-between">
            <Link href="#" className="lg:text-[14px]">
              Invitation, Stationary & Home
            </Link>
            <ArrowForwardIosOutlinedIcon className="lg:hidden" />
          </li>
          <li className="py-3 lg:flex items-center lg:grow lg:list-none lg:text-center lg:px-2 lg:py-4 flex justify-between">
            <Link href="#" className="lg:text-[14px]">
              Website by Vista x Wix
            </Link>
            <ArrowForwardIosOutlinedIcon className="lg:hidden" />
          </li>
          <li className="py-3 lg:flex items-center lg:grow lg:list-none lg:text-center lg:px-2 lg:py-4 flex justify-between">
            <Link href="#" className="lg:text-[14px]">
              Design & logo
            </Link>
            <ArrowForwardIosOutlinedIcon className="lg:hidden" />
          </li>
        </ul>
        
        <section className="bg-[#f8f8f8] py-5 hidden">
            <span>Shop our sites</span>
            <nav>
                <ul>
                    <li>
                        <Link href="#">Website by Vista </Link>
                    </li>
                    <li>
                        <Link href="#">Coporate Pricing</Link>
                    </li>
                    <li>
                        <Link href="#">Reseller Program</Link>
                    </li>
                    <li>
                        <Link href="#">VistaCreate</Link>
                    </li>
                </ul>
            </nav>
        </section>
      </nav>


      </div>
      <div className={`lg:hidden ${clicked ? style.navv : "bg-transparent"}`}></div>
    </>
  );
}
