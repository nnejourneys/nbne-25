import Image, { ImageLoaderProps } from "next/image";
import { imgblurDataURL } from "@/lib/constants"; 

export default function PostImage({ src }: ImageLoaderProps) {
  return (
    <>
      {src ? (
        <Image
          src={src}
          alt={`image for post`}
          className="w-full mx-auto my-10" //max-h-96 
          width="720"
          height="480"
          placeholder="blur"
          blurDataURL={imgblurDataURL}
        />
      ) : null}
    </>
  );
}
