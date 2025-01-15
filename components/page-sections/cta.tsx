"use client";
import Link from "next/link";
import Image from "next/image";
import { imgblurDataURL } from "@/lib/constants";
import { Button } from "../ui/button";

export default function CTA() {
  return (
    <>
      <section className="h-96 relative">
        <Image
          className="object-cover object-center"
          src="/images/ferry-crossing.jpg"
          alt="Northeast India ferry crossing"
          fill
          placeholder="blur"
          blurDataURL={imgblurDataURL}
        />
        <div className="absolute right-20 top-1/2">
          <Link href="/contact">
            <Button size="lg" className="uppercase">
              get in touch
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
