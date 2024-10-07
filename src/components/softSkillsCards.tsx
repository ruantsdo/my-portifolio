//Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
//Next
import Image from "next/image";
//Data
import { SoftSkills } from "@/data";

const SoftSkillsCards = () => {
  return SoftSkills.map((sk, index) => {
    return (
      <Card
        className="flex flex-row md:flex-col w-full h-[140px] md:w-[250px] md:h-[240px] items-center"
        key={index}
      >
        <CardHeader className="p-3 md:mt-5">
          <div className="flex items-center bg-white rounded-full w-[60px] h-[60px]">
            <Image src={sk.icon} alt={sk.title} className="max-h-[75%]" />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col self-center text-center p-1">
          <CardTitle className="font-bold text-10 md:text-12 mb-1">
            {sk.title}
          </CardTitle>
          <p className="text-10px md:text-11">{sk.description}</p>
        </CardContent>
      </Card>
    );
  });
};

export default SoftSkillsCards;
