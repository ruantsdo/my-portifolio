//Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProjectToolTip from "./tooltip";
//Next
import Image from "next/image";
//Types
import { Project } from "@/types";

interface Props {
  Project: Project;
}

const ProjectCard = ({ Project }: Props) => {
  return (
    <div className="flex w-[90%] md:w-[340px] h-[300px] animate-slide-in-left">
      <Card className="relative flex flex-col w-full h-full items-center justify-center gap-2 self-center shadow-[0px_0px_10px_0px_#d9d9d9] hover:scale-110 transition-all">
        {Project.videos || Project.github || Project.vercel ? (
          <ProjectToolTip Project={Project} />
        ) : null}
        <CardHeader className="w-full">
          <Image
            src={
              Array.isArray(Project.images)
                ? Project.images[0].src
                : Project.images.src
            }
            alt={
              Array.isArray(Project.images)
                ? Project.images[0].alt
                : Project.images.alt
            }
            width={500}
            height={500}
            blurDataURL="data:..."
            placeholder="blur"
            className="self-center w-[95%] h-[150px] rounded-md"
          />
        </CardHeader>
        <CardContent className="w-[95%]">
          <CardTitle className="text-center font-bold text-sm mb-1">
            {Project.title}
          </CardTitle>
          <CardDescription className="text-ellipsis overflow-hidden text-wrap line-clamp-5 font-medium text-white">
            {Project.description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
