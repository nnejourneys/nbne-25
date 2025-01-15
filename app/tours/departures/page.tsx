import HeroPage from "@/components/page-sections/hero-page"; 
import { Heading } from "@/components/styledcomps/heading";
import StaggeredList from "@/components/styledcomps/staggered-list";
import StaggeredListItem from "@/components/styledcomps/staggered-list-item";
import TourCard from "@/components/tours/tours-list/tour-card"; 
import { Tours, tours } from "#site/content";
import { Container } from "@/components/styledcomps/container";

export default function Departures() {
  const departureTours = tours
    .filter((tour) => tour.category === "departures")
    .sort((a, b) => a.weight! - b.weight!)
    .filter((tour) => !tour.draft);

  return (
    <>
      <HeroPage />
      <Container width="marginxy">
        <Heading size="xl" variant="sectiontitle">
          {" "}
          Fixed Departures 2025{" "}
        </Heading>
        <section className="mx-auto">
          <StaggeredList>
            {departureTours.map((tour: Tours, index) => (
              <StaggeredListItem key={index}>
                <TourCard
                  draft={tour.draft}
                  slugAsParams={tour.slugAsParams}
                  title={tour.title}
                  slug={tour.slug}
                  subtitle={tour.subtitle}
                  days={tour.days}
                  bg_image={tour.bg_image}
                  type={tour.type}
                  tourtype={tour.tourtype}
                  category={tour.category}
                  cat={tour.cat}
                  weight={tour.weight}
                  touricon={tour.touricon}
                  body={tour.body}
                />
              </StaggeredListItem>
            ))}
          </StaggeredList>
        </section>
      </Container>
    </>
  );
}
