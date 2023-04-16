import { NavLink } from "react-router-dom";

import "./CostumNavLinkButton.scss";

const CostumNavLinkButton = (props) => {
  return <NavLink to={props.url}>{props.name}</NavLink>;
};

export default CostumNavLinkButton;
