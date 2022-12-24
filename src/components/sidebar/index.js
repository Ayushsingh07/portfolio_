import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo-s.png";
import LogoSub from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'



const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSub} alt="logosub" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel="nonreferre" href="https://www.linkedin.com/in/ayush-singh-285066208/">
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />

            </a>
        </li>
        <li>
            <a target='_blank' rel="nonreferre" href="https://github.com/Ayushsingh07">
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e '/>
            </a>
        </li>
        <li>
            <a target='_blank' rel="nonreferre" href="https://twitter.com/AYUSH95969667">
                <FontAwesomeIcon icon={faTwitter} color='#4d4d4e '/>
            </a>
        </li>
        
    </ul>
  </div>
);

export default Sidebar;
