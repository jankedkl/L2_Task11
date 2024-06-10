import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/StoreSlice";
import { selectCartTotalItems } from "../store/StoreSlice";


// Product Items.
// Import images.
import image1 from "../Images/images/image1.jpg";
import image2 from "../Images/images/image2.jpg";
import image3 from "../Images/images/image3.jpg";
import image4 from "../Images/images/image4.jpg";
import image5 from "../Images/images/image5.jpg";
import image6 from "../Images/images/image6.jpg";
import image7 from "../Images/images/image7.jpg";
import image8 from "../Images/images/image8.jpg";
import image9 from "../Images/images/image9.jpg";

export default function Products() {
  const dispatch = useDispatch();
  const totalItemsInCart = useSelector(selectCartTotalItems);

  const ProductItems = [
    {
      id: 1,
      name: "Skin-care",
      image: image1,
      price: 899.99,
      text: "The ultimate cleanser for your skin.",
    },
    {
      id: 2,
      name: "Skin-care",
      image: image2,
      price: 450.0,
      text: "The ultimate cleanser for your skin.",
    },
    {
      id: 3,
      name: "Skin-care",
      image: image3,
      price: 1999.99,
      text: "The ultimate cleanser for your skin.",
    },
    {
      id: 4,
      name: "Skin-care",
      image: image4,
      price: 599.99,
      text: "The ultimate cleanser for your skin.",
    },
    {
      id: 5,
      name: "Skin-care",
      image: image5,
      price: 399.99,
      text: "The ultimate cleanser for your skin.",
    },
    {
      id: 6,
      name: "Skin-care",
      image: image6,
      price: 249.99,
      text: "The ultimate cleanser for your skin.",
    },
    {
      id: 7,
      name: "Skin-care",
      image: image7,
      price: 199.99,
      text: "The ultimate cleanser for your skin.",
    },
    {
      id: 8,
      name: "Skin-care",
      image: image8,
      price: 599.99,
      text: "The ultimate cleanser for your skin.",
    },
    {
      id: 9,
      name: "Skin-care",
      image: image9,
      price: 400.0,
      text: "The ultimate cleanser for your skin.",
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="products-component">
      <h3> Browse your favourite skin-care products </h3>
      <Link className="cart-count" to="/cart">Total items in your shopping cart: {totalItemsInCart}</Link>
      <Container className="products">
        <Row>
          {ProductItems.map((productItem) => (
            <Col md={3} key={productItem.id}>
              <Card
                className="product-card"
                style={{ marginBottom: "20px", height: "600px" }}
              >
                <Card.Img
                  className="product-image"
                  variant="top"
                  src={productItem.image}
                  alt={productItem.name}
                />
                <Card.Body>
                  <Card.Title>{productItem.name}</Card.Title>
                  <Card.Text>{productItem.text}</Card.Text>
                  <Card.Text>{productItem.price.toFixed(2)}</Card.Text>
                </Card.Body>
                <button onClick={() => handleAddToCart(productItem)}>
                  Add to Cart
                </button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
