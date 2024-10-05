//Icons
import { GitHub, LinkedIn, WhatsApp } from "@/icons";
//Types
import { SocialMedia } from "@/types";

const SocialMediasData: SocialMedia[] = [
  {
    tooltip: "Visitar perfil do GitHub",
    alt: "Ir para o GitHub",
    link: "https://github.com/ruantsdo",
    icon: GitHub,
  },
  {
    tooltip: "Visitar perfil do LinkedIn",
    alt: "Ir para o LinkedIn",
    link: "https://www.linkedin.com/in/ruantsdo/",
    icon: LinkedIn,
  },
  {
    tooltip: "Clique aqui para iniciar uma conversa no WhatsApp!",
    alt: "Iniciar uma conversa no WhatsApp",
    link: "https://api.whatsapp.com/send/?phone=5575999145854&text=Ol%C3%A1%2C+vim+pelo+seu+portifolio%21&type=phone_number&app_absent=0",
    icon: WhatsApp,
  },
];

export default SocialMediasData;
