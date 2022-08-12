import React from 'react'
import Card from 'react-bootstrap/Card';


const Cardp = ({imagen, titulo, descripcion} ) => {
  return (
    <Card border="info" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardp