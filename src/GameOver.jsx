import React from "react";
import "./GameOver.css";

const GameOver = (props) => {
  return (
    <div className="overlay">
      <div className="overlay_container">
        <h1>Game Over</h1>
        <p>Score was : {props.score}</p>
        <button className="close" onClick={props.close}>X</button>
      </div>
    </div>
  );
};

export default GameOver;
