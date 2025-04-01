import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Choose from "./components/Choose";
import Manufacture from "./components/Manufacture";
import Carousels from "./components/Carousels";
import Partners from "./components/Partners";
import Global from "./components/Global";
import Footer from "./components/Footer";
import Contact from "./components/Contact";



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Choose/>
      <Manufacture/>
      <Carousels/>
      <Partners/>
      <Global/>
      <Contact/>
      <Footer/>
    </div>
  );
}
