//Sections
import { Presentation, Skills, Projects, Contact } from "@/sections";
//Components
import { Footer } from "@/components";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-around items-center font-[family-name:var(--font-montserrat)] bg-bg text-white">
      <div className="flex flex-col w-full md:w-[95%] xl:max-w-[1920px]">
        <Presentation />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
