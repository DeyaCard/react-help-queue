import React from "react";
import tobinImage from "./../img/TobinOlReign.jpeg";

function Header(){
  return (
    <React.Fragment>
      <h1 style={{backgroundColor: "#dc143c", color: "white"}}>TicketsNow</h1>
        <div>
          <img src={tobinImage} alt="An image of tobin heath" class="center"/>
        </div>
    </React.Fragment>
  );
}

export default Header;
