//Types
import { SoftSkill } from "@/types";
//Icons
import { Rocket, Devices, PersonSignal, Bulb } from "@/icons";

const SoftSkills: SoftSkill[] = [
  {
    title: "Adaptabilidade",
    description:
      "Aprendo e me adapto rapidamente sobre meio ao qual estou inserido",
    icon: PersonSignal,
  },
  {
    title: "Gerencia de conflitos",
    description: "Gosto de ajudar na busca de soluções para problemas",
    icon: Bulb,
  },
  {
    title: "Responsividade",
    description:
      "Construo layouts capazes de se adaptar aos mais diversos dispositivos",
    icon: Devices,
  },
  {
    title: "Dedicação a Aprendizado",
    description: "Sempre buscando melhorar, estou sempre disposto a aprender",
    icon: Rocket,
  },
];

export default SoftSkills;
