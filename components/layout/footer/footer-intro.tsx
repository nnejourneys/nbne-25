import Image from "next/image";
import { imgblurDataURL } from "@/lib/constants";

interface FooterData {
  img: string;
  content: string;
}

interface FooterIntroProps {
  footerdata: FooterData;
}

export default function FooterIntro({ footerdata }: FooterIntroProps) {
  return (
    <>
      <Image
        className="mt-1 mb-5"
        src={footerdata.img}
        placeholder="blur"
        blurDataURL={imgblurDataURL}
        alt="logo"
        width={300 / 2}
        height={205 / 2}
      />
      <p className="text-foreground mt-3 mb-5 pe-5">{footerdata.content}</p>
    </>
  );
}