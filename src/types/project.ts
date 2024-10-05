import CarouselItem from "./carouselItem";

interface Project {
  title: string;
  description: string;
  usedTechnologies: string;
  videos?: CarouselItem[];
  images: CarouselItem[];
  github?: string;
  demo?: string;
}

export default Project;
