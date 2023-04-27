import { React } from "react";
import CostumNavLinkButton from "./CostumNavLinkButton";

const HeaderNavbar = () => {
  return (
    <nav>
      <ul>
        <li className="activity">
          <CostumNavLinkButton url="/1" name="bleble" />
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
  );
};

export default HeaderNavbar;
