import "materialize-css/dist/css/materialize.min.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./FabCard.css";
// import M from "materialize-css";

const CardComponent = ({ img, title }) => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={img} />
            <a className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">
                <FavoriteIcon />
              </i>
            </a>
          </div>
          <div className="card-content">
            <span className="card-title">{title} </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius
              corporis, laboriosam illo dicta similique tempore fuga. Ex nobis
              repellat iure!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
