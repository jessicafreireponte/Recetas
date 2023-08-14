import { About } from "./About";
import { Contact } from "./Contact";
import "./Main.css";
import { Recipies } from "./Recipies";

export const Main = () => {
  return (
    <main className="mainPrincipal">
      <About />
      <Recipies />
      <Contact />
    </main>
  );
};
