import Link from "next/link";
import Image from "next/image";
import LogoLg from '../../../public/images/logo-sm.png'

export const Logo = () => {
  return (
    <Link href="/">
      <div className="size-[2rem] bg-dark relative shrink-0">
        <Image
          src='/logo-sm.png'
          alt="The Canvas"
          fill
          sizes="auto, 100vh"
          className="shrink-0 hover:opacity-75 transition"
          // width={40}
          // height={30}
        />
      </div>
    </Link>
  );
};