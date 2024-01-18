import React from "react";
import logo from "../img/logo_mockup2.png";

function Logo(props) {
  const { className } = props;
  return (
    <>
      <img src={logo} alt="trivial-web-logo" className={className} />
    </>
  );
}

export default Logo;
