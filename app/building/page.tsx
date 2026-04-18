import EarlyProjectList from "@/components/EarlyProjectList";
import PageTitle from "@/components/PageTitle";
import ProjectList from "@/components/ProjectList";
import { projects } from "@/lib/projects";

export default function Building() {
  return (
    <>
      <PageTitle>Anirudh Dabas (अनिरुद्ध दाबास)</PageTitle>
      <ProjectList projects={projects} />
      <EarlyProjectList />
    </>
  );
}
