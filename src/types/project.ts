import CarouselItem from "./carouselItem";

interface Project {
  title: string;
  description: string;
  usedTechnologies: string;
  images: CarouselItem[];
  links?: {
    videos?: CarouselItem[];
    github?: string;
    preview?: string;
  };
}

export default Project;
