"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Project } from "@/types";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef } from "react";

interface Props {
  images: Project["images"];
  delayMultiplayer: number;
}

const CardImages = ({ images, delayMultiplayer }: Props) => {
  const plugin = useRef(
    Autoplay({
      delay: 4000 + delayMultiplayer,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  useEffect(() => {
    const autoplay = plugin.current;
    autoplay.stop();

    const timer = setTimeout(() => {
      autoplay.play();
    }, delayMultiplayer);

    return () => clearTimeout(timer);
  }, [delayMultiplayer]);

  return (
    <Carousel
      className="self-center md:max-w-[400px] h-[230px] rounded-md shadow-[0px_0px_2px_0px_#d9d9d9]"
      opts={{
        align: "start",
        loop: true,
        startIndex: 0,
      }}
      plugins={[plugin.current]}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              blurDataURL="data:..."
              placeholder="blur"
              width={500}
              height={500}
              className="self-center md:max-w-[400px] h-[230px] rounded-md"
              loading="lazy"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="mt-24 ml-44 md:ml-52" size={"sm"} />
      <CarouselNext className="mt-24 mr-44 md:mr-52" size={"sm"} />
    </Carousel>
  );
};

export default CardImages;
