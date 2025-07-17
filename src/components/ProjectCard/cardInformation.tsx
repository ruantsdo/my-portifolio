//Shadcn UI
import { CardDescription, CardTitle } from "@/components/ui/card";
//Types
import { Project } from "@/types";

interface Props {
  title: Project["title"];
  description: Project["description"];
}

const CardInformation = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <CardTitle className="text-center font-bold text-sm mt-1 md:mt-0">
        {title}
      </CardTitle>

      <CardDescription className="text-ellipsis overflow-hidden text-wrap font-medium text-white">
        {description}
      </CardDescription>
    </div>
  );
};

export default CardInformation;
