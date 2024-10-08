"use-client";

//Components
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectCard } from "@/components";
//Next
import Image from "next/image";
//Types
import { Project } from "@/types";
import Link from "next/link";

interface Props {
  Project: Project;
  index: number;
}

const ProjectDrawer = ({ Project, index }: Props) => {
  return (
    <Drawer>
      <DrawerTrigger className="flex w-full md:w-[340px] h-[300px] justify-center">
        <ProjectCard Project={Project} index={index} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-xl">{Project.title}</DrawerTitle>
          <p className="text-sm">
            Tecnologias usadas: {Project.usedTechnologies}
          </p>
          <DrawerDescription>{Project.description}</DrawerDescription>
        </DrawerHeader>
        <Carousel className="w-[90%] md:w-[70%] place-self-center">
          <CarouselContent>
            {Project.videos?.map((pv, index) => {
              return (
                <CarouselItem className="flex justify-around" key={index}>
                  <iframe
                    className="w-[500px] h-[200px] md:h-[250px] rounded-md"
                    src={pv.src}
                    title={pv.alt}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                  />
                </CarouselItem>
              );
            })}
            {Project.images?.map((pi, index) => {
              return (
                <CarouselItem className="flex justify-around" key={index}>
                  <Image
                    src={pi.src}
                    alt={pi.alt}
                    width={500}
                    height={500}
                    blurDataURL="data:..."
                    placeholder="blur"
                    className="self-center w-[500px] h-[200px] md:h-[250px] rounded-md"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:left-1 bg-bgContrast" />
          <CarouselNext className="-right-4 md:right-1 bg-bgContrast" />
        </Carousel>
        <DrawerFooter>
          <div className="flex flex-row w-full gap-5 justify-center">
            {Project.demo && (
              <Button asChild>
                <Link href={Project.demo} target="_blank">
                  Ver Demo
                </Link>
              </Button>
            )}
            {Project.github && (
              <Button asChild>
                <Link href={Project.github} target="_blank">
                  Ver no GitHub
                </Link>
              </Button>
            )}
          </div>
          <DrawerClose>
            <Button>Fechar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ProjectDrawer;
