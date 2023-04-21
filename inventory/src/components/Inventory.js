import React from "react";

const Inventory = ({ flavor, inventory, onInventoryChange }) => {
  const handleSold = () => {
    if (inventory > 0) {
      onInventoryChange(inventory - 1);
    }
  };

  const handleGivenAway = () => {
    if (inventory > 0) {
      onInventoryChange(inventory - 1);
    }
  };

  return (
    <div>
      <h2>Inventory for {flavor}</h2>
      <p>Remaining: {inventory}</p>
      <button onClick={handleSold}>Sold one scoop</button>
      <button onClick={handleGivenAway}>Gave one scoop away</button>
    </div>
  );
};

export default Inventory;