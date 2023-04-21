import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import FlavorSelection from './FlavorSelection';
import Inventory from './Inventory';

const App = () => {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <Row>
          <Col><FlavorSelection /></Col>
          <Col><Inventory /></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;