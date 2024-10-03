//Components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
//Next
import Image from "next/image";
//Icons
import { Media } from "@/icons";
//Types
import { Project } from "@/types";

interface Props {
  Project: Project;
}

const ProjectToolTip = ({ Project }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="hover:cursor-default">
          {Project.videos ? (
            <span className="absolute top-1 right-1 h-5 w-5">
              <Image
                src={Media}
                alt="Media Icon"
                className="absolute w-full h-full"
              />
              <Image
                src={Media}
                alt="Media Icon"
                className="absolute w-full h-full animate-ping"
              />
            </span>
          ) : (
            <span className="absolute items-center top-2 right-3 h-3 w-3">
              <span className="absolute w-full h-full rounded-full bg-sky-400 opacity-75 animate-ping " />
              <span className="absolute w-full h-full rounded-full bg-sky-500" />
            </span>
          )}
        </TooltipTrigger>
        <TooltipContent className="text-center">
          {Project.videos && <p>Video demonstrativo disponível</p>}
          {Project.vercel && <p>Deploy disponível</p>}
          {Project.github && <p>Código fonte disponível</p>}
          <p>Clique no card para ver mais!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ProjectToolTip;
