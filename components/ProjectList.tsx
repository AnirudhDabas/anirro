import type { Project } from "@/lib/projects";

function toRoman(n: number): string {
  const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms = [
    "m",
    "cm",
    "d",
    "cd",
    "c",
    "xc",
    "l",
    "xl",
    "x",
    "ix",
    "v",
    "iv",
    "i",
  ];
  let result = "";
  let remaining = n;
  for (let i = 0; i < vals.length; i++) {
    while (remaining >= vals[i]) {
      result += syms[i];
      remaining -= vals[i];
    }
  }
  return result;
}

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
            <span className="pt-[0.35rem] text-[0.85rem] leading-none text-[var(--muted)] italic">
              {toRoman(index + 1)}.
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
