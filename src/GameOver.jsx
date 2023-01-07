import React from "react";
import "./GameOver.css";

const GameOver = (props) => {
  return (
    <div className="overlay">
      <div className="overlay_container">
        <h1>Game Over</h1>
        <span>{props.message}</span>
        <p>Score was : {props.score}</p>
        {props.score>5?(<p>Well played</p>):(<p>Opps..Try again</p>)}
        <button className="close" onClick={props.close}>X</button>
      </div>
    </div>
  );
};

export default GameOver;
