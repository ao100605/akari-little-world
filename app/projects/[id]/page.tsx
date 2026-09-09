import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/app/data";
import ProjectDetail from "@/components/ProjectDetail";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.title} · Akari's Little World`,
    description: project.subtitle,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) notFound();

  const project = projects[index];
  const prevProject = projects[(index - 1 + projects.length) % projects.length];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <ProjectDetail
      project={project}
      index={index}
      total={projects.length}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
