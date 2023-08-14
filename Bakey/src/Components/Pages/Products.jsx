import { useNavigate, useParams } from "react-router-dom";
import json from "../../../Json/json.json";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import "./Products.css";

export const Products = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = json.find((e) => e.id === id);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <section className="product">
      <ul className="card row marging">
        {product ? (
          <li key={product.id}>
            <h2 className="productH2">{product.title}</h2>
            <img src={product.img} alt={product.title} className="imgMain" />
            <p>{product.description}</p>
            <ul className="list">
              <h5>Recepies:</h5>
              {product.elements?.map((elem) => (
                <li key={elem}>{elem}</li>
              ))}
            </ul>
          </li>
        ) : (
          <p>Not Found</p>
        )}
        <div className="btnDiv">
          <button onClick={handleBack} className="btn">
            <FastRewindIcon />
          </button>
        </div>
      </ul>
    </section>
  );
};
