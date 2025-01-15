import Image from "next/image";
import type { ImageLoaderProps } from "next/image";
import { imgblurDataURL } from "@/lib/constants";
import { Skeleton } from "../ui/skeleton";

export default function CoverImage({ src }: ImageLoaderProps) {
  return (
    <>
      {src ? (
        <Image
          src={src}
          alt={`Cover Image for blog post`}
          className="max-h-72 object-cover rounded-t-xl"
          width="640"
          height="360"
          placeholder="blur"
          blurDataURL={imgblurDataURL}
        />
      ) : <Skeleton className="max-h-72 w-full" />}
    </>
  );
}
