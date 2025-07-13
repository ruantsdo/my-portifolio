// Next
import Image from "next/image";

// Shadcn UI
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Tipos
import { Project } from "@/types";

// Componentes
import ProjectToolTip from "./tooltip";

// Interfaces
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
    <div className="flex flex-col justify-center gap-2">
      <CardTitle className="font-bold text-sm">{project.title}</CardTitle>

      <CardDescription className="text-ellipsis overflow-hidden text-wrap line-clamp-5 font-medium text-white">
        {project.description}
      </CardDescription>

      <div
        className={`flex flex-col ${inverted ? "items-end" : "items-start"}`}
      >
        <p className="text-sm">Tecnologias usadas</p>
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech, i) => (
            <Badge key={i} variant="secondary" className="w-fit">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-3">
          {project.videos && (
            <Button className="w-fit h-8">Vídeo Demonstrativo</Button>
          )}
          {project.demo && <Button className="w-fit h-8">Preview</Button>}
          {project.github && (
            <Button className="w-fit h-8">Repositório no Github</Button>
          )}
        </div>
      </div>
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
      className="self-center max-w-[400px] h-[95%] rounded-md"
      loading="lazy"
    />
  );

  return (
    <div className="h-full animate-slide-in-left" style={style}>
      <Card className="relative flex flex-col h-full items-center shadow-[0px_0px_5px_0px_#d9d9d9] md:hover:scale-105 transition-all">
        <CardContent className="flex w-[98%] h-full">
          {inverted ? (
            <>
              {cardImage}
              {cardInformation}
            </>
          ) : (
            <>
              {cardInformation}
              {cardImage}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
