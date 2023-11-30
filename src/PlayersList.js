import React from 'react'
import './App.css';
import joueurs from './joueurs';
import Player from './player';


function PlayersList() {
  return (

    <div className="joueurs">
      {joueurs.map((joueurs) =>
      <div style={{display:"inline-flex",margin:"1rem",width:"500px",marginLeft: "11%",}}>
        <Player keys ={joueurs} joueurs={joueurs}/>
          </div>
      )}
   
    </div>
  );
}


export default PlayersList;
