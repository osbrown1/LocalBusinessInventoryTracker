import React from "react";
import PropTypes from "prop-types";

function CreamDetail(props){
  const { cream, onClickingDelete } = props; 

  return (
    <React.Fragment>
      <h1>Ice Cream Detail</h1>
      <h3>{cream.brand} - {cream.flavor}</h3>
      <p><em>{cream.rating}</em></p>
      <button onClick={ props.onClickingEdit }>Update Ice Cream</button> 
      <button onClick={()=> onClickingDelete(cream.id) }>Delete Ice Cream</button> 
      <hr/>
    </React.Fragment>
  );
}

CreamDetail.propTypes = {
  cream: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CreamDetail;