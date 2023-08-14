import "materialize-css/dist/css/materialize.min.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

import "./FabCard.css";

const CardComponent = ({ id, img, title, description }) => {
  const navigate = useNavigate();

  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={img} />
            <a
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => navigate(`/products/${id}`)}
            >
              <i className="material-icons">
                <FavoriteIcon />
              </i>
            </a>
          </div>
          <div className="card-content">
            <span className="card-title">{title} </span>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
