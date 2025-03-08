

import { About } from "@/containers/About/About";
import Header from "../containers/Header/Header";
//import LandingView from "@/views/landing/LandingView";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <About/>
    </div>
  );
}
