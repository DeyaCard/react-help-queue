import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  const myStyledComponentStyles = {
    backgroundColor: '#000080',
    color: "white",
    fontFamily: 'Verdana',
    paddingTop: '5px',
    padding: '20px'
  }
  return (
    <React.Fragment>
      <div style={myStyledComponentStyles}>
        <div onClick = {() => props.whenTicketClicked(props.id)}>
        <h3>{props.names} - {props.location}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
        </div>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string, // new PropType
  whenTicketClicked: PropTypes.func // new PropType
};

export default Ticket;

