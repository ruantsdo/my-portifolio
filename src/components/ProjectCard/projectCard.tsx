//Next
import Image from "next/image";
//Shadcn UI
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
//Types
import { Project } from "@/types";
//Interfaces
interface Props {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: Props) => {
  const style = { animationDelay: `${index * 0.2}s` };
  const inverted = index % 2 !== 0;

  const technologies = project.usedTechnologies
    .toUpperCase()
    .split(",")
    .filter((term) => term);

  const cardInformation = (
    <div className={`flex flex-col gap-2`}>
      <CardTitle className="text-center font-bold text-sm mt-1 md:mt-0">
        {project.title}
      </CardTitle>

      <CardDescription className="text-ellipsis overflow-hidden text-wrap line-clamp-5 font-medium text-white">
        {project.description}
      </CardDescription>
    </div>
  );

  const cardImage = project.images?.[0] && (
    <Image
      src={project.images[0].src}
      alt={project.images[0].alt}
      blurDataURL="data:..."
      placeholder="blur"
      width={500}
      height={500}
      className="self-center md:max-w-[400px] h-[230px] rounded-md shadow-[0px_0px_2px_0px_#d9d9d9]"
      loading="lazy"
    />
  );

  const cardFooter = (
    <div
      className={`flex flex-col ${
        inverted ? "md:items-start" : "md:items-end"
      } mt-3 md:mt-5`}
    >
      <p className="text-sm">Tecnologias usadas</p>
      <div className="flex flex-wrap gap-1">
        {technologies.map((tech, i) => (
          <Badge key={i} variant="secondary" className="w-fit">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-2">
        {project.videos && (
          <Button className="w-fit h-8">Vídeo Demonstrativo</Button>
        )}
        {project.demo && <Button className="w-fit h-8">Preview</Button>}
        {project.github && (
          <Button className="w-fit h-8">Repositório no Github</Button>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full h-full animate-slide-in-left" style={style}>
      <Card className="relative flex flex-col items-center shadow-[0px_0px_4px_0px_#d9d9d9] md:hover:scale-[101%] transition-all">
        <CardContent className="flex flex-col w-full h-full justify-between p-2">
          <div
            className={`flex flex-col justify-between ${
              inverted ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {cardImage}
            <div
              className={`flex flex-col ${inverted ? "md:mr-5" : "md:ml-5"}`}
            >
              {cardInformation}
              {cardFooter}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
