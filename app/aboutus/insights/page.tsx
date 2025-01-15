import React from "react";
import { SITE_TITLE, imgblurDataURL, BASE_PATH } from "@/lib/constants";
import Insightsdata from "@/data/insights.json";
import Image from "next/image";
import Bounded from "@/components/styledcomps/bounded";
import { Heading } from "@/components/styledcomps/heading";
import { Card } from "@/components/ui/card";
import { P } from "@/components/ui/p";

export default function Insights() {
  return (
    <>
      <Bounded width="marginxy">
        <div className="mb-10">
          <Heading variant="sectiontitlehalf">{Insightsdata.title}</Heading>
          <P>{Insightsdata.p1}</P>
          <P>{Insightsdata.p2}</P>
          <P className="italic">
            {Insightsdata.p3}&nbsp;{Insightsdata.quote}
            <strong>{Insightsdata.quotetext}</strong>
          </P>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Insightsdata.insights.map((item, index) => (
            <Card key={index}>
              <Heading className="text-center pt-3">
                {item.title}
              </Heading>
              <Image
                className="w-full"
                src={item.image}
                placeholder="blur"
                blurDataURL={imgblurDataURL}
                alt="service-image"
                width="240"
                height="160"
              />
              <P className="text-justify p-5">{item.text}</P>
            </Card>
          ))}
        </div>
      </Bounded>
    </>
  );
}
