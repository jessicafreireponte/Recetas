import CardComponent from "./FabCard";
import json from "../../Json/json.json";
import "./Recipies.css";

export const Recipies = () => {
  return (
    <article id="Recipes">
      <header>
        <h2>Our products</h2>
        <h4>
          Lorem ipsum dolor ad repellat omnis error cumque?
          <br></br>
          <em className="import">
            (Clicla en el corazón para saber los ingredientes)
          </em>
        </h4>
      </header>
      <section>
        <ul className="cards">
          {json?.map((e) => (
            <li key={e.id}>
              <CardComponent
                id={e.id}
                img={e.img}
                title={e.title}
                description={e.description}
              />
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};
