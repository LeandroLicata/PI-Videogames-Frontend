import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const VideogameCard = ({ id, name, genres, background_image }) => {
  return (
    <Card
      className="card border-primary mb-3 overflow-auto"
      style={{ maxWidth: 250, height: 300 }}
    >
      <Link to={`/detail/${id}`} className="text-decoration-none">
        <Card.Img
          variant="top"
          src={background_image}
          
        />
        <Card.Body>
          <Card.Title className="text-danger fs-6">{name}</Card.Title>
          <Card.Text className="text-info fs-6">{genres.join(", ")}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default VideogameCard;
