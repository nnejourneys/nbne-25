"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TourCardBody from "./tour-card-body";
import TourCardImg from "./tour-card-img";
import { Tours } from "@/.velite";
// import { Tours } from "@/.contentlayer/generated";

export default function TourCard(tour: Tours) {
  return (
    <>
      <div className="grow group relative grid grid-cols-12 w-auto bg-clip-border m-2 shadow-sm bg-muted text-muted-foreground">
        <div className="col-span-12 xl:col-span-7 basis-7/12 overflow-hidden z-10">
          <TourCardImg
            bg_image={tour.bg_image}
            title={tour.title}
            subtitle={tour.subtitle}
            type={tour.type}
            slugAsParams={tour.slugAsParams}
            draft={tour.draft}
            body={tour.body}
            slug={tour.slug}
          />
        </div>
        <div className="col-span-12 xl:col-span-5 basis-5/12 m-2 z-20">
          <TourCardBody
            draft={tour.draft}
            slugAsParams={tour.slugAsParams}
            slug={tour.slug}
            title={tour.title}
            subtitle={tour.subtitle}
            touricon={tour.touricon}
            days={tour.days}
            cat={tour.cat}
            type={tour.type}
            body={tour.body}
          />
          <motion.div whileTap={{ scale: 0.99, opacity: 0.5 }}>
            <Link href={`/${tour.slug}`}>
              <Button size="sm">Tour Details</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
