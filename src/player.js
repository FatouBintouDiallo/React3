import React from 'react';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

 function Player (props) {
  
   return (
   <div>
   <Card style={{ width: '18rem',backgroundColor:"yellow" }}>
   <Card.Img variant="top" src={props.joueurs.image}  height={300} />
   <Card.Body>
     <Card.Title>{props.joueurs.Nom}</Card.Title>
     <Card.Title>{props.joueurs.Equipe}</Card.Title>
     <Card.Title>{props.joueurs.Age}</Card.Title>
     <Card.Title>{props.joueurs.Maillot}</Card.Title>
     <Card.Title>{props.joueurs.Nationalité}</Card.Title>
   </Card.Body>
 </Card>
 </div>
 )
 }
 export default Player;
 
 
    
 