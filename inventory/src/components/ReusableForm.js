import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='flavor'
          placeholder='Flavor of Ice Cream' />
          <br/>
          <br/>
        <input
          type='text'
          name='brand'
          placeholder='Type of Brand' />
          <br/>
          <br/>
        <textarea
          name='rating'
          placeholder='Write a review of the ice cream' />
          <br/>
          <br/>
        <button type='submit'>{props.buttonText}</button>
      </form>
      <br/>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm; 
