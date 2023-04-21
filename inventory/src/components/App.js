import React from "react";
import Header from "./Header";
import FlavorSelection from "./FlavorSelection";
import Inventory from "./Inventory";

const App = () => {
  return (
    <React.Fragment>
    <Header />
    <FlavorSelection />
    <Inventory />
    </React.Fragment>
  );
}

export default App;