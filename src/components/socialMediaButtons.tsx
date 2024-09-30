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
    const style = {
      animationDelay: `${index}s`,
    };

    return (
      <TooltipProvider key={index}>
        <Tooltip>
          <TooltipTrigger>
            <Button
              asChild
              variant="secondary"
              size="icon"
              className="animate-float hover:animate-none"
              style={style}
            >
              <Link href={smd.link} target="_blank">
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
