import React from "react";

const flavors = ['Vanilla', 'Chocolate', 'Strawberry'];

const FlavorSelection = ({ onSelect }) => {
  return (
    <div>
      <h2>Choose a Flavor:</h2>
      {flavors.map((flavor) => (
        <button key={flavor} onClick={() => onSelect(flavor)}>
          {flavor}
        </button>
      ))}
    </div>
  );
};

export default FlavorSelection;