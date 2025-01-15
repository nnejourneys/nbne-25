import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import HeroPage from "@/components/page-sections/hero-page";
import TourCard from "@/components/tours/tours-list/tour-card";
import StaggeredList from "@/components/styledcomps/staggered-list";
import StaggeredListItem from "@/components/styledcomps/staggered-list-item";
import { Heading } from "@/components/styledcomps/heading";
import { Tours, tours } from "#site/content";
import { Container } from "@/components/styledcomps/container";

export default async function TourHome(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const categoryVariants = ["active", "leisure", "culture"];

  const active = [
    "",
    "cycling",
    "trekking",
    "multi-activity",
    "motorcycle",
    "family",
  ];
  const leisure = ["", "comfort", "offbeat", "wildlife", "roadtrip"];
  const culture = ["", "arunachal", "assam", "nagaland"];

  const filteredTours: Tours[] = tours
    .filter((tour) => tour.category !== "departures")
    .sort((a, b) => a.weight! - b.weight!)
    .filter((tour) => !tour.draft); 

  const selectedCategory = searchParams.category || "active";
  const selectedTag = searchParams.tag;

  const filterByTag = (filteredData: Tours[]) => {
    if (!selectedTag) {
      return filteredData;
    }
    const filteredTours = filteredData.filter(
      (tour: Tours) => tour.tags?.indexOf(`${selectedTag}`) !== -1
    );
    return filteredTours;
  };
  const filterByCategory = (filteredData: Tours[]) => {
    if (!selectedCategory) {
      return filteredData;
    }
    const filteredTours = filteredData.filter(
      (tour: Tours) => tour.category === selectedCategory
    );
    return filteredTours;
  };
  let filteredData = filterByTag(filteredTours);
  filteredData = filterByCategory(filteredData);

  return (
    <>
      <HeroPage /> 
      <Container className="mb-5 px-5 md:px-10 lg:px-20" width="marginy">
        <Heading size="xl" variant="sectiontitle">
          Tours
        </Heading>
        <div>
          <div className=" text-center">
            {categoryVariants.map((item, index) => (
              <Link
                key={index}
                href={`?category=${item}&tag=`}
                scroll={false}
                className="mr-3"
              >
                <Button className="capitalize">{item}</Button>
              </Link>
            ))}
          </div>

          <RadioGroup
            defaultValue="option-one"
            className="mt-5 flex-col justify-center"
          >
            <div
              className={
                `${selectedCategory}` === "active"
                  ? "md:flex justify-center"
                  : "hidden"
              }
            >
              {active.map((item, index) => (
                <Link
                  key={index}
                  href={`?category=${selectedCategory}&tag=${item}`}
                  scroll={false}
                  className="mx-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={item} id={item} />
                    <Label htmlFor={item} className="capitalize">
                      {item || "All"}
                    </Label>
                  </div>
                </Link>
              ))}
            </div>

            <div
              className={
                `${selectedCategory}` === "leisure"
                  ? "md:flex justify-center"
                  : "hidden"
              }
            >
              {leisure.map((item, index) => (
                <Link
                  key={index}
                  href={`?category=${selectedCategory}&tag=${item}`}
                  scroll={false}
                  className="mx-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={item} id={item} />
                    <Label htmlFor={item} className="capitalize">
                      {item || "All"}
                    </Label>
                  </div>
                </Link>
              ))}
            </div>

            <div
              className={
                `${selectedCategory}` === "culture"
                  ? "md:flex justify-center"
                  : "hidden"
              }
            >
              {culture.map((item, index) => (
                <Link
                  key={index}
                  href={`?category=${selectedCategory}&tag=${item}`}
                  scroll={false}
                  className="mx-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={item} id={item} />
                    <Label htmlFor={item} className="capitalize">
                      {item || "All"}
                    </Label>
                  </div>
                </Link>
              ))}
            </div>
          </RadioGroup>
        </div>

        <section className="mx-auto mt-20">
          <StaggeredList>
            {filteredData.map((tour: Tours, index) => (
              <StaggeredListItem key={index}>
                <TourCard
                  slugAsParams={tour.slugAsParams}
                  draft={tour.draft}
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
