import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

function BasicExample() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const cards = [
    { title: "Product 1", text: "Information", imgSrc: "Images/iphone12.png" },
    { title: "Product 2", text: "Information", imgSrc: "Images/iphone12.png" },
    { title: "Product 3", text: "Information", imgSrc: "Images/iphone12.png" },
    { title: "Product 4", text: "Information", imgSrc: "Images/iphone12.png" },
    { title: "Product 4", text: "Information", imgSrc: "Images/iphone12.png" },
    { title: "Product 5", text: "Information", imgSrc: "Images/iphone12.png" },
    { title: "Product 6", text: "Information", imgSrc: "Images/iphone12.png" },
    { title: "Product 7", text: "Information", imgSrc: "Images/iphone12.png" },
    { title: "Product 8", text: "Information", imgSrc: "Images/iphone12.png" },
    { title: "Product 9", text: "Information", imgSrc: "Images/iphone12.png" },
    { title: "Product 10",text: "Information", imgSrc: "Images/iphone12.png" },
    { title: "Product 11",text: "Information", imgSrc: "Images/iphone12.png" },
    { title: "Product 12",text: "Information", imgSrc: "Images/iphone12.png" }, 
  ];

  return (
    <Container>
      <Row>
        {cards.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              style={{
                width: "100%",
                marginBottom: "15px",
                backgroundColor: hoveredCard === index ? "rgba(1,2,9, 0.7)" : "rgba(1,2,9, 0.3)",
                cursor: "pointer"
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img variant="top" src={card.imgSrc} />

              <Card.Body>
                <Card.Title style={{ color: "white" }}>{card.title}</Card.Title>
                <Card.Text style={{ color: "white" }}>{card.text}</Card.Text>
                <Button variant="secondary">Add to Cart</Button>
                <Button style={{ marginLeft: "10px" }} variant="dark">
                  <FavoriteOutlinedIcon style={{ color: "#fa41ff" }} />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BasicExample;
