//Next
import Image from "next/image";
//Icons
import { Media, GitHubAlternative, Eye } from "@/icons";
//Types
import { Project } from "@/types";

interface Props {
  Project: Project;
}

const ProjectToolTip = ({ Project }: Props) => {
  return (
    <div className="flex flex-row absolute top-1 justify-end gap-3 h-5 w-[95%]">
      {Project.videos && (
        <Image src={Media} alt="Media Icon" className="w-5 h-5 animate-tada" />
      )}
      {Project.demo && (
        <Image
          src={Eye}
          alt="Demonstration Icon"
          className="w-5 h-5 animate-tada"
        />
      )}
      {Project.github && (
        <Image
          src={GitHubAlternative}
          alt="GitHub Icon"
          className="w-5 h-5 animate-tada"
        />
      )}
    </div>
  );
};

export default ProjectToolTip;
