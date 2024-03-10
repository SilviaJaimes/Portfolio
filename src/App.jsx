import AboutMe from './Components/AboutMe';
import Description from './Components/Description';
import FooterProject from './Components/FooterProject';
import NavbarMenuPrin from './Components/NavbarMenuPrin';
import Projects from './Components/Projects';
import Service from './Components/Service';
import './index.css';

export default function App() {
  return (
    <div className="bg-zinc-950">
      <NavbarMenuPrin />
      <Description />
      <AboutMe />
      <Projects />
      <Service />
      <FooterProject />
    </div>
  );
}