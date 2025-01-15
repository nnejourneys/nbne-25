"use client";
import TourSliderCard from "@/components/tours/tours-list/tour-itin-slider-card"; 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { tours } from "#site/content";
import { Container } from "../styledcomps/container";

export default function ToursSlider() {
  const departureTours = tours
    .filter((tour) => tour.category === "departures")
    .sort((a, b) => a.weight! - b.weight!)
    .filter((tour) => !tour.draft);

  return (
    <Container width="nomargin" className="px-5 md:px-20">
      <h4 className="font-bold text-3xl text-center mb-5">
        Some of our upcoming Departures
      </h4>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {departureTours.map((tour, index) => (
            <CarouselItem
              key={index}
              className="pl-0.5 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <TourSliderCard
                slugAsParams={tour.slugAsParams}
                draft={tour.draft}
                bg_image={tour.bg_image}
                title={tour.title}
                subtitle={tour.subtitle}
                slug={tour.slug}
                cat={tour.cat}
                body={tour.body}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
}
