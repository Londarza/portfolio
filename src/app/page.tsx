

import About  from "@/containers/About/About";
import Header from "../containers/Header/Header";
import  Work  from "@/containers/work/Work";
import  Skills  from "@/containers/skills/Skills";
import Footer from "@/containers/footer/Footer";
//import LandingView from "@/views/landing/LandingView";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <About/>
      <Work/>
      <Skills/>
      <Footer />
    </div>
  );
}
