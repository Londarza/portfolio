
import Carrousel from "@/components/carrousel/Carrousel";
import { notFound } from "next/navigation";
import { projectsData } from "@/constants/projectsData";

type Props = {
  params: Promise<{
    name: string;
  }>;
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((name) => ({ name }));
}

export default async function Galery({ params } : Props) {
  const {name} =  await params
  const project = projectsData[name];
  console.log('proyeccto', name)
  if (!project) return notFound();

  return (
    <div className="app">
      <Carrousel imagesProp={project} />
    </div>
  );
}
