//Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
//Next
import Image from "next/image";
//Data
import { HardSkills } from "@/data";

const HardSkillsCards = () => {
  return HardSkills.map((hk, index) => {
    const style = {
      animationDelay: `${index * 0.2}s`,
    };

    return (
      <div className="animate-slide-in-left" key={index} style={style}>
        <Card
          className="flex flex-col w-[80px] h-[80px] items-center justify-center gap-2 animate-float"
          style={style}
        >
          <CardHeader>
            <Image src={hk.icon} alt={hk.alt} className="w-[40px] h-[40px]" />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle className="font-normal text-sm">{hk.title}</CardTitle>
          </CardContent>
        </Card>
      </div>
    );
  });
};

export default HardSkillsCards;
