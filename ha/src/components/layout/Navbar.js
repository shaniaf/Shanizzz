import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className="fab fa-github">{props.title}</i>
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Hayush",
};

export default Navbar;
