//Shadcn UI
import { Card, CardContent } from "@/components/ui/card";
//Types
import { Project } from "@/types";
//Components
import ProjectLinksButtons from "./projectLinksButtons";
import CardInformation from "./cardInformation";
import CardFooter from "./cardFooter";
import CardImages from "./cardImages";

interface Props {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: Props) => {
  const style = { animationDelay: `${index * 0.2}s` };
  const inverted = index % 2 !== 0;

  return (
    <div className="w-full h-full animate-slide-in-left" style={style}>
      <Card className="relative flex flex-col items-center shadow-[0px_0px_4px_0px_#d9d9d9] md:hover:scale-[101%] transition-all">
        <CardContent className="flex flex-col w-full h-full justify-between p-2">
          <div
            className={`flex flex-col justify-between ${
              inverted ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <CardImages
              images={project.images}
              delayMultiplayer={(index + 2) * 750}
            />
            <div
              className={`flex flex-col ${inverted ? "md:mr-5" : "md:ml-5"}`}
            >
              <CardInformation
                title={project.title}
                description={project.description}
              />
              <div
                className={`flex flex-col ${
                  inverted ? "md:items-start" : "md:items-end"
                } mt-3 md:mt-5`}
              >
                <CardFooter
                  usedTechnologies={project.usedTechnologies}
                  inverted={inverted}
                />
                <ProjectLinksButtons links={project.links} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
