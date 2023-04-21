import React from "react";
import PropTypes from "prop-types";

function Cream(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCreamClicked(props.id)}>
        <h3>{props.brand} | {props.flavor}</h3>
        <p><em>{props.rating}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Cream.propTypes = {
  flavor: PropTypes.string,
  brand: PropTypes.string,
  rating: PropTypes.string,
  id: PropTypes.string,
  whenCreamClicked: PropTypes.func
};

export default Cream;