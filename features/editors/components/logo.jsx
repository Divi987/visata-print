import Link from "next/link";
import Image from "next/image";
import LogoLg from '../../../public/images/logo-sm.png'

export const Logo = () => {
  return (
    <Link href="/">
      <div className="size-[3rem] relative shrink-0">
        <Image
          src='/images/logo-sm.png'
        //   fill
          alt="The Canvas"
          className="shrink-0 hover:opacity-75 transition"
          width={40}
          height={30}
        />
      </div>
    </Link>
  );
};