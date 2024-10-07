//Next
import Image from "next/image";
import Link from "next/link";
//Components
import { SocialMediaButtons } from "@/components";
//Images
import { ProfilePic } from "@/images";
import { Button } from "@/components/ui/button";

const Presentation = () => {
  const contactLink =
    "https://api.whatsapp.com/send/?phone=5575999145854&text=Ol%C3%A1%2C+vim+pelo+seu+portifolio%21&type=phone_number&app_absent=0";

  return (
    <section className="flex flex-col items-center mt-5 mb-5">
      <div className="text-center gap-2">
        <h1 className="text-red font-black text-2xl md:text-5xl">Ruan Tiago</h1>
        <h2 className="font-medium text-xl md:text-4xl mb-5">
          FullStack Developer
        </h2>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between items-center place-self-center">
        <div className="flex flex-col items-center md:w-[300px] md:order-2">
          <Image
            src={ProfilePic}
            alt="Profile Photo"
            className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] shadow-[12px_10px_30px_0px_#EE4266] rounded"
          />
          <SocialMediaButtons />
        </div>
        <div className="w-[95%] md:w-[60%]">
          <h1 className="font-bold text-xl place-self-start md:-mt-16 mb-5">
            Sobre mim
          </h1>
          <p className="text-lg font-light mr-1">
            Sou bacharelando em Sistemas de Informação e desenvolvedor por
            paixão. Atualmente, estou estagiando na Secretaria Municipal de
            Saúde, onde atuo como técnico em informática, desenvolvendo páginas
            e sistemas web. Além disso, sou membro da Empresa Júnior
            TecnoSystem, onde atuo como desenvolvedor front-end, com foco em
            UX/UI para plataformas Web e Mobile. Tenho como compromisso a
            entrega de projetos de alta qualidade, escalabilidade e performance.
          </p>
        </div>
      </div>
      <Button asChild variant="secondary">
        <Link href={contactLink} target="_blank">
          Entre em contato!
        </Link>
      </Button>
    </section>
  );
};

export default Presentation;
