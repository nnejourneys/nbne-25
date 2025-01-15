"use client";
import { Icon } from "@iconify/react"; 

interface SocialItem {
  link: string;
  name: string;
  icons: string;
}

interface FooterData {
  social: SocialItem[];
}

interface SocialLinksProps {
  footerdata: FooterData;
}

export default function SocialLinks({ footerdata }: SocialLinksProps) {
  return (
    <>
      <ul className="flex -ml-3">
        {footerdata.social.map((item: SocialItem, index: number) => (
          <li className="mr-1" key={index}>
            <a href={item.link} aria-label={item.name} target="_blank">
              <Icon
                icon={item.icons}
                className="w-8 h-8 mr-5 text-foreground hover:text-primary transition duration-150 ease-out"
              /> 
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
