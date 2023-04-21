import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function NewCreamForm(props) {
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewCreamFormSubmission}
        buttonText="Add Ice Cream Review" />
    </React.Fragment>
  );

  function handleNewCreamFormSubmission(event) {
    event.preventDefault();
    props.onNewCreamCreation({
      flavor: event.target.flavor.value, 
      brand: event.target.brand.value, 
      rating: event.target.rating.value, 
      id: v4()
    });
  }
}

NewCreamForm.propTypes = {
  onNewCreamCreation: PropTypes.func
};

export default NewCreamForm;