import Events from "../components/Events";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Nav from "../components/Navbar";
import Services from "../components/Services";

export default function IndexPage() {
  return (
    <div className="bg-main-color pb-12">
      <Nav />
      <Hero />
      <Feature />
      <Services />
      <Events />
    </div>
  );
}
