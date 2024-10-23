import React from "react";
import Products from "./ProductList";
import { Button, Card, Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import './Productlistgrid.css'


function BasicExample() {
    return (
       
<>

   {/* Navbar starts */}
<Navbar expand="lg" className="cards">
      <Container>
        <Navbar.Brand href="#home"  >Products.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  className="mainlink" href="#home">Home</Nav.Link>
            <Nav.Link className="mainlink" href="#link">Link</Nav.Link>
            <Nav.Link className="mainlink" href="#link">Products</Nav.Link>
            <Nav.Link className="mainlink" href="#link">Services</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* navbar ends */}

     {/* Product List starts here */}
     <Container>
        <h1 className="bg-primary text-white">Product List</h1>


        <Row>
        {Products.map((product) =>(
            <Col key={product.id} md={3} className="mb-2">
       
      <Card className="card" style={{ width: '18rem' }} >
        <Card.Img  className="card-img-top" variant="top" src={product.imageUrl} />
        <Card.Body className="cardbody" color="white">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Button variant="success">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Col>
        ))}

</Row>
      </Container>
      {/* product list enter here */}
      </>
    );
  }
  

  export default BasicExample;