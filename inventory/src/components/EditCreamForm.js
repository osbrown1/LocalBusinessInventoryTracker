import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditCreamForm (props) {
  const { cream } = props;
  function handleEditCreamFormSubmission(event) {
    event.preventDefault();
    props.onEditCream({
      flavor: event.target.flavor.value,
      brand: event.target.brand.value,
      rating: event.target.rating.value,
      id: cream.id});
  }

  return(
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditCreamFormSubmission}
        buttonText="Update Ice Cream" />
    </React.Fragment>
  );
}

EditCreamForm.propTypes = {
  cream: PropTypes.object, 
  onEditCream: PropTypes.func
};

export default EditCreamForm;