//Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
//Next
import Image from "next/image";
//Data
import { HardSkills } from "@/data";

const HardSkillsCards = () => {
  return HardSkills.map((hk, index) => {
    return (
      <Card
        className="flex flex-col w-[80px] h-[80px] items-center justify-center gap-2"
        key={index}
      >
        <CardHeader>
          <Image src={hk.icon} alt={hk.alt} className="w-[40px] h-[40px]" />
        </CardHeader>
        <CardContent className="text-center">
          <CardTitle className="font-normal text-sm">{hk.title}</CardTitle>
        </CardContent>
      </Card>
    );
  });
};

export default HardSkillsCards;
