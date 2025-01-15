"use client";
import React from "react";
import Image from "next/image";
import { imgblurDataURL } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { Heading } from "../styledcomps/heading";

export default function HeroPage() {
  const pathname = usePathname();
  const pagename = usePathname().split("/").pop();
  const pagetitle = pagename?.split("/").join(" ").split("-").join(" ");
  const imageFolder = "/images/page-hero";
  const imageFile = pathname + ".jpg";
  const image = imageFolder + imageFile;

  return (
    <>
      <Image
        className="object-cover object-center h-[60vh]"
        src={image}
        alt="Cover Image"
        placeholder="blur"
        blurDataURL={imgblurDataURL}
        width={1920}
        height={1280}
        priority
      />

      <div className="absolute top-0 left-0 w-full h-[60vh] bg-black/20" />
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2">
        <Heading
          size="lg"
          className="text-white text-center font-bold uppercase [text-shadow:_1px_1px_rgb(0_0_0_/_100%)]"
          asChild={true}
        >
          <h1>{pagetitle}</h1>
        </Heading>
      </div>
    </>
  );
}
