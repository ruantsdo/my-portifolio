//Shadcn UI
import { Badge } from "@/components/ui/badge";
//Types
import { Project } from "@/types";

interface Props {
  usedTechnologies: Project["usedTechnologies"];
  inverted: boolean;
}

const CardFooter = ({ usedTechnologies, inverted }: Props) => {
  const technologies = usedTechnologies
    .toUpperCase()
    .split(",")
    .filter((term) => term);

  return (
    <div className="flex flex-col flex-wrap gap-1">
      <p className={`text-sm ${inverted ? "text-start" : "text-end"}`}>
        Tecnologias usadas
      </p>
      <div className="flex flex-wrap gap-1">
        {technologies.map((tech, i) => (
          <Badge key={i} variant="secondary" className="w-fit">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default CardFooter;
