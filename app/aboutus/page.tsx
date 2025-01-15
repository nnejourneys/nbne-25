"use client";
import React from "react";
import { imgblurDataURL } from "@/lib/constants";
import Image from "next/image";
import Aboutusdata from "@/data/aboutus.json";
import { Icon } from "@iconify/react";
import Bounded from "@/components/styledcomps/bounded";
import { Heading } from "@/components/styledcomps/heading";
import { P } from "@/components/ui/p";

export default function Aboutus() {
  return (
    <>
      <Bounded width="marginxy">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-7 px-4 text-justify">
            <Heading variant="sectiontitlehalf">
              {Aboutusdata.abouttitle}
            </Heading>
            <P>{Aboutusdata.abouttext}</P>
          </div>

          <div className="lg:col-span-5 md:mb-50">
            <Image
              className="w-full px-4"
              src={Aboutusdata.aboutimg}
              placeholder="blur"
              blurDataURL={imgblurDataURL}
              alt={Aboutusdata.abouttext}
              width={300}
              height={300}
            />
          </div>
        </div>
      </Bounded>
      <Bounded width="marginxy">
        <div className="grid lg:grid-cols-12 rounded-lg bg-slate-800">
          <div className="lg:col-span-5 bg-center bg-cover bg-no-repeat">
            <Image
              className="lg:rounded-l-lg"
              src={Aboutusdata.visionimg}
              placeholder="blur"
              blurDataURL={imgblurDataURL}
              alt={Aboutusdata.visiontitle}
              width={640}
              height={480}
            />
          </div>
          <div className="lg:col-span-7 p-5">
            <Heading variant="sectiontitlehalf" className="text-white">
              {Aboutusdata.visiontitle}
            </Heading>
            <P className="text-white text-justify">{Aboutusdata.visiontext}</P>
          </div>
        </div>
      </Bounded>

      <Bounded width="marginxy">
        <Heading >
          {Aboutusdata.responsibilitytitle}
        </Heading>
        <Heading variant="sectiontitlehalf">
          {Aboutusdata.responsibilitysubtitle}
        </Heading>
        <div className="grid grid-cols-12 my-5">
          {Aboutusdata.responsibility.map((item, index) => (
            <div
              key={index}
              className="col-span-12 md:col-span-6 lg:col-span-3"
            >
              <Icon
                className="w-72 mx-auto"
                icon={item.icon}
                width="100"
                height="100"
              />
              <h5 className="mx-auto w-2/3 text-xl font-bold card-title text-center mb-5">
                {item.title}
              </h5>
            </div>
          ))}
        </div>
        <P className=" text-justify">{Aboutusdata.responsibilitytext}</P>
      </Bounded>
    </>
  );
}
