import React from "react";
import Card from "react-bootstrap/Card";

const ProjectCard = (props) => {
  console.log(props);
  return (
    <Card style={{ width: "25rem", margin: "1em" }}>
      <Card.Img src={props.image} alt="Card image" />

      <Card.Title>{props.title}</Card.Title>
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
