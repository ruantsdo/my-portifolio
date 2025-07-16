//Shadcn UI
import { Button } from "@/components/ui/button";
//Types
import { Project } from "@/types";
//Icons
import { Media, GitHubAlternative, Eye } from "@/icons";
//Next
import Image from "next/image";
import Link from "next/link";

interface Props {
  links: Project["links"];
}

const ProjectLinksButtons = ({ links = {} }: Props) => {
  const { videos, preview, github } = links;

  return (
    <div className="flex flex-wrap gap-3 mt-2">
      {videos && (
        <Button className="w-fit h-8 gap-1" asChild>
          <div>
            <Image src={Media} alt="Media Icon" className="w-5 h-5" />
            <Link href={videos[0].src} target="_blank">
              Vídeo Demonstrativo
            </Link>
          </div>
        </Button>
      )}
      {preview && (
        <Button className="w-fit h-8 gap-1" asChild>
          <div>
            <Image src={Eye} alt="Eye Icon" className="w-5 h-5" />
            <Link href={preview} target="_blank">
              Preview
            </Link>
          </div>
        </Button>
      )}
      {github && (
        <Button className="w-fit h-8 gap-1" asChild>
          <div>
            <Image
              src={GitHubAlternative}
              alt="Demonstration Icon"
              className="w-5 h-5"
            />
            <Link href={github} target="_blank">
              Repositório no Github
            </Link>
          </div>
        </Button>
      )}
    </div>
  );
};

export default ProjectLinksButtons;
