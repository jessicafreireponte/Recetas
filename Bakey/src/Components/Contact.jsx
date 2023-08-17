import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import DirectionsIcon from "@mui/icons-material/Directions";
import "./Contact.css";
import { MapComponent } from "./Map";

export const Contact = () => {
  return (
    <footer id="Contact" className=".footerPrincipal">
      <aside className="headerAside">
        <header>
          <h3>Contact</h3>
          <h4>Lorem ipsum dolor sit amet</h4>
        </header>
      </aside>
      <aside>
        <ul>
          <li>
            <LocalPhoneIcon /> <a href="tel:+88888888">+88 888888</a>
            {/* Cambiar el número de telefono por el que quieras */}
          </li>
          <li>
            <EmailIcon />
            <a href="">bakey@fake.com</a>
          </li>
          <li>
            <DirectionsIcon />
            <a href=""> Street false 88, Bakery</a>
          </li>
        </ul>
      </aside>
      <MapComponent />

      <p className="footer">Create by @jessicafreireponte in 2023</p>
    </footer>
  );
};
