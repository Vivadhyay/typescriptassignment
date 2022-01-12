import React from "react";
import { Link } from "react-router-dom";
import "tachyons";
import "./header.styles.scss";

type Proptype = {
  value: string;
};
const Header = (props: Proptype) => {
  const { value } = props;
  return (
    <div className="header">
      <div className="heading">{value} </div>
      <div className="options">
        <Link className="option" to="/">
          HOME
        </Link>
        <Link className="option" to="/explore">
          EXPLORE
        </Link>
        <Link className="option" to="/About">
          ABOUT
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
