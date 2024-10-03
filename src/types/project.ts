import CarouselItem from "./carouselItem";

interface Project {
  title: string;
  description: string;
  videos?: CarouselItem | CarouselItem[];
  images: CarouselItem | CarouselItem[];
  github?: string;
  vercel?: string;
}

export default Project;
