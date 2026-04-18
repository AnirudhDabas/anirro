import type { Project } from "@/lib/projects";

type Props = {
  projects: Project[];
};

export default function ProjectList({ projects }: Props) {
  return (
    <ol className="mt-10 list-none space-y-8 pl-0">
      {projects.map((project, index) => {
        const external = project.href.startsWith("http");
        return (
          <li key={project.name} className="grid grid-cols-[2rem_1fr] gap-2">
            <span className="pt-[0.4rem] text-[0.8rem] leading-none text-[#9a9a9a]">
              {index + 1}.
            </span>
            <div className="space-y-2">
              <a
                href={project.href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {project.name}
              </a>
              <p>{project.description}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
