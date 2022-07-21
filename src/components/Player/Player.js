import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
const Player = (props) => {
    const {img,name,salary} = props.player;
    return (
        <div>
            <Col>
          <Card>
            <Card.Img height={350} variant="top" src={img} />
            <Card.Body>
              <Card.Title>Name: {name}</Card.Title>
              <Card.Text>Salary: {salary} million per year</Card.Text>
              <Button onClick={()=>props.handleAddPlayer(props.player)} variant="success">Select Your Player</Button>{' '}
            </Card.Body>
          </Card>
        </Col>
        </div>
    );
};

export default Player;