import PageTitle from "@/components/PageTitle";
import ProjectList from "@/components/ProjectList";
import { projects } from "@/lib/projects";

export default function Building() {
  return (
    <>
      <PageTitle>Anirudh Dabas</PageTitle>
      <ProjectList projects={projects} />
    </>
  );
}
