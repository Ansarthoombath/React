import React, { useState } from "react";
import BasicExample from "./ProductList1";
import { Container } from "react-bootstrap";
import Products from "./Productlist";

function Maincart() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const totalItems = cartItems.length;
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
    return (
        <div>
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
        </div>
    );
}

export default Maincart;
