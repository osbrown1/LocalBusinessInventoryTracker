import React from 'react';
import Cream from './Cream';
import PropTypes from 'prop-types';


  function CreamList(props) { 
    return (
      <React.Fragment>
        <hr />
        {props.creamList.map((cream) => 
          <Cream 
            whenCreamClicked = { props.onCreamSelection }
            flavor={cream.flavor}
            brand={cream.brand}
            rating={cream.rating}
            id={cream.id}
            key={cream.id} />
        )}
      </React.Fragment>
    );
  }

CreamList.propTypes = { 
  creamList: PropTypes.array,
  onCreamSelection: PropTypes.func
};

export default CreamList;