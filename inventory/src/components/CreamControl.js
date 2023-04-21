import React from "react";
// import CreamList from "./CreamList";
// import CreamDetail from './CreamDetail';
import EditCreamForm from './EditCreamForm';
// import NewCreamForm from "./NewCreamForm";


class CreamControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCreamList: [],
      selectedCream: null,
      editing: false
    };
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true });
  }

  handleEditingCreamInList = (creamToEdit) => {
    const editedMainCreamList = this.state.mainCreamList
      .filter(cream => cream.id !== this.state.selectedCream.id)
      .concat(creamToEdit);
    this.setState({
        mainCreamList: editedMainCreamList,
        editing: false,
        selectedCream: null
      });
  }

  handleAddingNewCreamToList = (newCream) => {
    const newMainCreamList = this.state.mainCreamList.concat(newCream);
    this.setState({mainCreamList: newMainCreamList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedCream = (id) => {
    const selectedCream = this.state.mainCreamList.filter(cream => cream.id === id)[0];
    this.setState({selectedCream: selectedCream});
  }

  handleClick = () => {
    if (this.state.selectedCream != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCream: null,
        editing: false
      });
    } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
    }
  }

  handleDeleteingCream = (id) => {
    const newMainCreamList = this.state.mainCreamList.filter(cream => cream.id !== id);
    this.setState({
      mainCreamList: newMainCreamList,
      selectedCream: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null; 
    if( this.state.editing) {
      currentlyVisibleState = <EditCreamForm cream = {this.state.selectedCream} onEditCream = {this.handleEditingCreamInList} />
      buttonText = "Return to Ice Cream List";
    } else if (this.state.selectedCream != null) {
      currentlyVisibleState = 
      <CreamDetail 
      cream = {this.state.selectedCream} 
      onClickingDelete = {this.handleDeleteingCream} 
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Ice Cream List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCreamForm  onNewCreamCreation={this.handleAddingNewCreamToList} />;
      buttonText = "Return to Cream List"; 
    } else {
      currentlyVisibleState = <CreamList creamList={this.state.mainCreamList} onCreamSelection={this.handleChangingSelectedCream} />;
      buttonText = "Add Cream Review"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CreamControl;