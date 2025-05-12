import Carrousel from "@/components/carrousel/Carrousel";

export default function Galery() {
  return (
    <div className="app">
      <Carrousel imagesProp= {['imagen 1', 'imagen 2']}/>
    </div>
  );
}