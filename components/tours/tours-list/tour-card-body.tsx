"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Separator } from "@/components/ui/separator";
import { Tours } from "@/.velite";
import { BASE_PATH } from "@/lib/constants";

export default function TourCardBody(tour: Tours) {
  const { slug, title, subtitle, touricon, days, cat } = tour;

  return (
    <>
      <div className="mb-5">
        <Link href={`${BASE_PATH}${slug}`}>
          <p className="mb-1 font-bold group-hover:text-primary">{title}</p>
          <p className="text-sm leading-4 mb-5">{subtitle}</p>
          <div className="flex">
            <Icon
              className="my-1 p-2 bg-muted-foreground/20 group-hover:text-primary rounded-lg"
              icon={touricon!}
              width="40"
            />
            <div className="my-auto">
              <p className="flex text-xs ms-2 mb-0">
                <Icon className="me-2 my-auto" icon="bytesize:flag" />
                {days}
              </p>
              <Separator className="ms-2 w-32 max-h-px" />
              <p className="flex text-xs ms-2 mb-0">
                <Icon className="me-2 my-auto" icon="bi:speedometer2" />
                {cat}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
