"use client";
//React
import { useState, useMemo } from "react";
// Components
import { ProjectDrawer } from "@/components";
import { Button } from "@/components/ui/button";
// Data
import { Projects as ProjectsData } from "@/data";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const visibleProjectsList = useMemo(() => {
    return ProjectsData.slice(0, visibleProjects);
  }, [visibleProjects]);

  const handleShowMore = () => {
    setVisibleProjects(visibleProjects + 3);
  };

  return (
    <section className="flex flex-col w-[95%] md:w-full place-self-center gap-5 mt-5 mb-5">
      <h1 className="font-bold text-xl md:text-4xl">Projetos</h1>

      <div className="flex flex-wrap justify-evenly gap-5">
        {visibleProjectsList.map((p, index) => (
          <ProjectDrawer Project={p} index={index - 2} key={index} />
        ))}
      </div>

      {visibleProjects < ProjectsData.length && (
        <Button
          variant="secondary"
          className="place-self-center"
          onClick={handleShowMore}
        >
          Ver mais
        </Button>
      )}
    </section>
  );
};

export default Projects;
