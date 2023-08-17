import { animateScroll as scroll } from "react-scroll";
import "./Header.css";

export const Header = () => {
  const scrollToMain = () => {
    scroll.scrollTo(document.getElementById("About").offsetTop - 60);
  };
  const scrollToHome = () => {
    scroll.scrollTo(document.getElementById("Home").offsetTop);
  };
  const scrollToRecipes = () => {
    scroll.scrollTo(document.getElementById("Recipes").offsetTop - 60);
  };
  const scrollToContact = () => {
    scroll.scrollTo(document.getElementById("Contact").offsetTop - 60);
  };

  return (
    <header className="headerPrincipal" id="Home">
      <nav>
        <ul>
          <li onClick={scrollToHome}>
            <a href="#Home">Home</a>
          </li>
          <li onClick={scrollToMain}>
            <a href="#About">About</a>
          </li>
          <li onClick={scrollToRecipes}>
            <a href="#Recipes">Recipes</a>
          </li>
          <li onClick={scrollToContact}>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <section>
        <h1>Welcome</h1>
        <aside className="scroll"></aside>
      </section>
    </header>
  );
};
