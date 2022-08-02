
import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

// const mainTicketList = [
//   {
//     names: 'Warpaint',
//     location: 'Revolution Hall',
//     issue: 'Firebase won\'t save record. Halp.'
//   },
//   {
//     names: 'Sleater-Kinney',
//     location: 'Crystal Ballroom',
//     issue: 'Prop types are throwing an error.'
//   },
//   {
//     names: 'Tobin Heath and OL Reign',
//     location: 'Providence Park',
//     issue: 'Child component isn\'t rendering.'
//   }
// ];

function TicketList(props){
  return (
    <React.Fragment>
     <hr/>
        {props.ticketList.map((ticket, index) =>
        // {mainTicketList.map((ticket, index) =>
          <Ticket names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            key={index} />
        )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;