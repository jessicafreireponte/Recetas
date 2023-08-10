import CardComponent from "./FabCard";

export const Recipies = () => {
  return (
    <article id="Recipes">
      <header>
        <h2>Our products</h2>
        <h4>Lorem ipsum dolor ad repellat omnis error cumque?</h4>
      </header>
      <section>
        <ul className="cards">
          <li>
            <CardComponent
              img={"./croissants.jpg"}
              title={"Croissants de fresas"}
            />
          </li>
          <li>
            <CardComponent img={"./cookies.jpg"} title={"Cookies de limón"} />
          </li>
          <li>
            <CardComponent img={"./cupcake.jpg"} title={"Cupcake fresa"} />
          </li>
          <li>
            <CardComponent img={"./macaroons.jpg"} title={"Macarrons"} />
          </li>
          <li>
            <CardComponent img={"./cakes.jpg"} title={"Cakes mixed berries"} />
          </li>
          <li>
            <CardComponent img={"./roulade.jpg"} title={"Roulade lime"} />
          </li>
        </ul>
      </section>
    </article>
  );
};
