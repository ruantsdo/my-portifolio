// Components
import { SoftSkillsCards, HardSkillsCards } from "@/components";

const Skills = () => {
  return (
    <section className="flex flex-col w-[95%] md:w-full place-self-center gap-5 mt-5 mb-5">
      <h1 className="font-bold text-xl md:text-4xl">Habilidades</h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-3">
        <SoftSkillsCards />
      </div>

      <div className="w-full flex flex-wrap justify-between gap-3">
        <HardSkillsCards />
      </div>
    </section>
  );
};

export default Skills;
