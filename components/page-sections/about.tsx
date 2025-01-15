"use client"; 
import Link from "next/link";
import Image from "next/image";
import { imgblurDataURL } from "@/lib/constants";
import Aboutdata from "@/data/about.json";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer"; 
import { Heading } from "@/components/styledcomps/heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { P } from "../ui/p"; 
import { Container } from "../styledcomps/container";

export default function About() {
  // const { ref, inView, entry } = useInView({ threshold: 0.3 });
  // const animation = useAnimation();

  // useEffect(() => {
  //   // console.log("use effect", inView, entry);
  //   if (inView) {
  //     animation.start({
  //       opacity: 1,
  //       transition: {
  //         type: "tween",
  //         duration: 2,
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({ opacity: 0 });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [inView]);
  return (
    <>
      <Container
        className={`relative my-20 before:absolute before:content-['']
            before:h-full before:w-full before:top-0 before:left-0 before:bg-[rgba(0, 0, 0, 0.329)] before:opacity-60`}
            animate
      >
        <div className="py-20">
          <Image
            className="z-0 object-cover object-center"
            src={Aboutdata.about.img}
            alt="Northeast India Man on stilts"
            fill
            placeholder="blur"
            blurDataURL={imgblurDataURL}
          />
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-6">
              <div 
              // ref={ref} 
              className="md:col-end-7 md:col-span-3">
                <motion.div 
                // animate={animation}
                >
                  <Card className="bg-gray-950/70 border-0">
                    <CardHeader>
                      <Heading variant="sectiontitlehalf">
                        <span className="text-white">
                          {Aboutdata.about.title}
                        </span>
                      </Heading>
                    </CardHeader>
                    <CardContent>
                      <P className="text-justify text-white mb-8">
                        {Aboutdata.about.text}
                      </P>
                      {/* <motion.div whileTap={{ scale: 0.9 }}> */}
                      <Link href={Aboutdata.about.btnlink} className="mt-2">
                        <Button>{Aboutdata.about.btntext}</Button>
                      </Link>
                      {/* </motion.div> */}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
