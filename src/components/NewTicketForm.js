import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewTicketForm(props){

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: v4()
      // numberOfStudents: parseInt(event.target.numberOfStudents.value)
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Event name' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <input
          type='text'
          placeholder='Section' />
        <button type='submit'>Add to cart</button>
      </form>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;