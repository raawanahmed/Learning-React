import React, { Component } from "react";

// as class stateless we prefer using stateless functional component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {/*{props.totalCounters} //Destructing arguments*/}
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
