import { NavLink } from "react-router-dom";
import CostumNavLinkButton from "./CostumNavLinkButton";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="page-title">
        <h1>Page The Page</h1>
      </div>
      <nav>
        <ul>
          <li className="activity">
            <CostumNavLinkButton url="/act" name="bleble" />
          </li>
          <li className="activity">
            <CostumNavLinkButton url={"/2"} name="bloodibla" />
          </li>
          <li className="activity">
            <CostumNavLinkButton url={"/3"} name="barakooda" />
          </li>
          <li className="activity">
            <CostumNavLinkButton url={"/4"} name="loopidabi" />
          </li>

          <li className="activity">
            <CostumNavLinkButton url={"/5"} name="babbaraa" />
          </li>
          <li className="activity">
            <CostumNavLinkButton url={"/6"} name="nablebood" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
