
import Carrousel from "@/components/carrousel/Carrousel";
import { notFound } from "next/navigation";
import { projectsData } from "@/constants/projectsData";

interface Props {
  params: { name: string };
}

export default function Galery({ params }: Props) {
  const project = projectsData[params.name];

  if (!project) return notFound();

  return (
    <div className="app">
      <Carrousel imagesProp={project} />
    </div>
  );
}
