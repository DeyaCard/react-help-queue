import React from "react";
import tobinImage from "./../img/TobinOlReign.jpeg";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={tobinImage} alt="An image of tobin heath" />
    </React.Fragment>
  );
}

export default Header;
