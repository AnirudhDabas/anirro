import { earlyProjects } from "@/lib/projects";

export default function EarlyProjectList() {
  return (
    <details className="early-projects">
      <summary>other projects</summary>

      <ol>
        {earlyProjects.map((project) => (
          <li key={project.name}>
            <div className="project-header">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              ) : (
                <span>{project.name}</span>
              )}
              <span className="tech">{project.tech}</span>
            </div>
            <p>{project.description}</p>
          </li>
        ))}
      </ol>
    </details>
  );
}
