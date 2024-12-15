import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <div className="mb-4">
        <div className="p-0 md:relative md:min-h-[300px] md:bg-transparent sm:bg-[#06462E] text-white text-center md:p-0 min-h-[300px]">
          <div className="textContainer relative ">

          <div className="imgContainer hidden md:block md:top-0 ">
            <div className="img">
                <Link href="#">
                <img src="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,w_768/legacy_dam/en-us/S001823443/MXP32555-BMSM-Holiday-FY25-Green-sept30-banner-001" srcset="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,w_768/legacy_dam/en-us/S001823443/MXP32555-BMSM-Holiday-FY25-Green-sept30-banner-001 768w, https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,w_1024/legacy_dam/en-us/S001823443/MXP32555-BMSM-Holiday-FY25-Green-sept30-banner-001 1024w, https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,w_1440/legacy_dam/en-us/S001823443/MXP32555-BMSM-Holiday-FY25-Green-sept30-banner-001 1440w, https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,w_1920/legacy_dam/en-us/S001823443/MXP32555-BMSM-Holiday-FY25-Green-sept30-banner-001 1920w, https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,w_2560/legacy_dam/en-us/S001823443/MXP32555-BMSM-Holiday-FY25-Green-sept30-banner-001 2560w, https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,w_2880/legacy_dam/en-us/S001823443/MXP32555-BMSM-Holiday-FY25-Green-sept30-banner-001 2880w, https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,w_3840/legacy_dam/en-us/S001823443/MXP32555-BMSM-Holiday-FY25-Green-sept30-banner-001 3840w" loading="eager" className="swan-fluid-image md:min-h-[300px] lg:min-h-[400px]" />
                </Link>
            </div>
          </div>

            <div className="p-6 lg:p-12 md:absolute md:top-0 md:left-[25%] md:h-fit swan-banner-text md:p-4 md:w-[50%] md:my-0 md:mx-auto bg-[#06462E] w-full">
              <p
                data-testid="eyebrow-without-icon py-4"
                className="swan-banner-eyebrow text-[14px] lg:text-[16px]"
              >
                SAVE ON PRINT PRODUCTS SITEWIDE
              </p>
              <p className="swan-banner-title swan-font-primary font-bold text-3xl mt-3 lg:text-[32px]">
                Get 30% off any 3+ items
              </p>
              <div className="swan-banner-description text-[14px] mt-3 lg:text-[16px]">
                <div>
                  {" "}
                  20% off any 2 items <br /> 15% off any 1 item
                </div>
              </div>
              <div className="swan-banner-description mt-3">
                <p className="text-[12px] lg:text-[14px]">
                  <span
                    style={{ textTransform: "none" }}
                    className="swan-promo-code text-[#a2e2b3] text-[12px]"
                  >
                    Code: SAVEITEMS
                  </span>
                  <span
                    role="presentation"
                    className="swan-pipe-separator h-[14px] border border-[#6c6c6c] mx-1 "
                  ></span>
                  Ends Oct. 10
                </p>
              </div>
              <div className="swan-banner-links mt-4">
                <a
                  href="https://www.vistaprint.com/business-cards"
                  className="swan-button swan-button-skin-primary swan-compact-mode swan-link py-2 px-3 bg-white text-black text-[14px] rounded-lg font-bold lg:text-[16px]"
                >
                  Business Cards
                </a>
                <a
                  href="https://www.vistaprint.com/signs-posters"
                  className="swan-button swan-button-skin-primary swan-compact-mode swan-link py-2 px-3 bg-white text-black text-[14px] rounded-lg mx-2.5 font-bold lg:text-[16px]"
                >
                  Signage
                </a>
                <a
                  href="/photo-gifts"
                  className="swan-button swan-button-skin-primary swan-compact-mode swan-link py-2 px-3 bg-white text-black text-[14px] rounded-lg font-bold lg:text-[16px]"
                >
                  Photo Gifts
                </a>
              </div>
              <div className="swan-banner-footnote">
                <div className="text-[12px] mt-4 lg:text-[14px]">
                  Maximum savings of $200. Multiple quantities of the same
                  products are not counted as separate items. To qualify,
                  identical products must have a different design or size.
                  Cannot be combined with other offers.
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
