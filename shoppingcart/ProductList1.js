import React, { useState } from "react";
import Products from "./Productlist";
import { Button, Card, Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import "./Productlistgrid.css";

function BasicExample() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const totalItems = cartItems.length;
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <>
            {/* Navbar starts */}

            {/* <Navbar expand="lg" className="cards w-100">
      <Container fluid>
        <Navbar.Brand href="#home" className="products-com" >Products.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  right-nav">
            <Nav.Link  className="mainlink" href="#home">Home</Nav.Link>
            <Nav.Link className="mainlink" href="#link">Link</Nav.Link>
            <Nav.Link className="mainlink" href="#link">Products</Nav.Link>
            <Nav.Link className="mainlink" href="#link">Services</Nav.Link> 
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar> */}

            {/* navbar ends */}

            {/* Product List starts here */}
            <div className="main-container" >
            <Container fluid  >
                <div className="productlist">
                    <h1 className=" heading">Product List</h1>
                </div>

                <Row>
                    {Products.map((product) => (
                        <Col key={product.id} md={3} className="mb-2">
                            <Card className="card" style={{ width: "18rem" }}>
                                <Card.Img className="card-img-top" variant="top" src={product.imageUrl} />
                                <Card.Body className="cardbody" color="white">
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text> {product.description}</Card.Text>
                                    <Card.Text>Price: ${product.price}</Card.Text>
                                    <Button variant="success" onClick={() => addToCart(product)}>
                                        Add to Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            </div>
            {/* product list enter here */}

            <Container>
                <h2>Cart Details</h2>
                {cartItems.map((item, index) => (
                    <p key={index}>
                        {item.name} - ${item.price}
                    </p>
                ))}
                <h2>Total items: {totalItems}</h2>
                <h2>Total amount: ${totalAmount}</h2>
            </Container>
        </>
    );
}

export default BasicExample;
