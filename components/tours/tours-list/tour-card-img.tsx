import Image from "next/image";
import { imgblurDataURL } from "@/lib/constants";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tours } from "@/.velite";

export default function TourCardImg({ bg_image, title }: Tours) {
  return (
    <>
      <AspectRatio ratio={16 / 9}>
        <Image
          className="object-cover transition duration-500 ease-in-out group-hover:scale-110"
          src={bg_image!}
          placeholder="blur"
          blurDataURL={imgblurDataURL}
          width={720}
          height={480}
          alt={title!}
        />
      </AspectRatio>
    </>
  );
}
