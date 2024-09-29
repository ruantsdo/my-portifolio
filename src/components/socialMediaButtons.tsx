//Components
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
//Next
import Image from "next/image";
import Link from "next/link";
//Data
import { SocialMediasData } from "@/data";

const SocialMediaButtons = () => {
  return SocialMediasData.map((smd, index) => {
    return (
      <TooltipProvider key={index}>
        <Tooltip>
          <TooltipTrigger>
            <Button variant="secondary" size="icon" asChild>
              <Link href={smd.link}>
                <Image src={smd.icon} alt={smd.alt} className="max-h-full" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{smd.tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  });
};

export default SocialMediaButtons;
