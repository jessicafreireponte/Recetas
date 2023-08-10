import { Contact } from "./Contact";
import "./Main.css";
import { Recipies } from "./Recipies";

export const Main = () => {
  return (
    <main className="mainPrincipal" id="About">
      <header>
        <h2>Tu panadería</h2>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
      </header>
      <section>
        <img src="./bakery.jpg" className="imgMain" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          voluptates obcaecati, ducimus deleniti magnam perferendis dolorem
          corrupti eius beatae accusantium quis quam voluptatem unde deserunt
          provident numquam, quia tempore hic?
        </p>
      </section>
      <section>
        <img src="./baked.jpg" className="imgMain" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          voluptates obcaecati, ducimus deleniti magnam perferendis dolorem
          corrupti eius beatae accusantium quis quam voluptatem unde deserunt
          provident numquam, quia tempore hic?
        </p>
      </section>
      <hr />

      <Recipies />
      <Contact />
    </main>
  );
};
