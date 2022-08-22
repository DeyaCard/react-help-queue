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
      <div onClick = {()=> props.whenTicketClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <p><em>{props.formattedWaitTime}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string, 
  whenTicketClicked: PropTypes.func, 
  formattedWaitTime: PropTypes.string
};

export default Ticket;

