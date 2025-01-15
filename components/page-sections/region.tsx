"use client";
import Regiondata from "@/data/region.json"; 
import Image from "next/image"; 
import { Heading } from "../styledcomps/heading";
import { P } from "../ui/p";
import { Container } from "../styledcomps/container";

export default function Region() {
  return (
    <Container width="marginxy">
      <Heading variant="sectiontitle" size="lg">
        The region at a glance
      </Heading>
      <ul className="region-card-list my-20">
        {Regiondata.accordion.map((item, index) => (
          <li
            className="row block md:flex md:flex-row even:flex-row-reverse gap-8 py-20 "
            key={index}
          >
            <div className="w-full md:w-1/2 mb-4">
              <Heading variant="sectiontitlehalf" size="md">
                {item.title}
              </Heading>
              <P className="text-justify">{item.text}</P>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                className="w-full"
                src={item.image}
                // placeholder="blur"
                // blurDataURL={imgblurDataURL}
                alt={item.title}
                width="480"
                height="480"
              />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
