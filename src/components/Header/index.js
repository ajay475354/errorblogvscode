import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <nav className="nav_container">
      <div className="blog_container">
        <h1>Blog</h1>
        <ul className="tabs_contanier">
          <li className="tab">
            <Link to="/">Home</Link>
          </li>
          <li className="tab">
            <Link to="/About">About</Link>
          </li>
          <li className="tab">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
