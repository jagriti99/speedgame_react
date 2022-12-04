import React, { Component } from "react";
import click from './sounds/click.wav';
import startgame from './sounds/startgame.wav';


import Circle from "./Circle";
import GameOver from "./GameOver";
import Heart from "./Heart";

import "./App.css";

let clickSound = new Audio(click);
let startGameSound = new Audio(startgame);

const getRntInteger = (min, max)=>{
  return Math.floor(Math.random()*(max-min+1)) + min ;
}

class App extends Component {
  state={
    circles:[1,2,3,4],
    score:0,
    current:undefined,
    pace:1000,
    gameOver:{ 
    isGameOver: false,
    message:""},
    gameOn:false,
    sound:false,
    round:0,
    mistake:0,
    totalLives:3,
  }
  lives = 3;
  timer;

changeHandler=(i) => {
  clickSound.play();
  
if (this.state.current !== i){
  return this.stopHandler("Wrong Click");
  ;
}
  this.setState({
    score: this.state.score + 1,
    round:0

  });
  this.lives = this.lives +1;
  console.log("clicked");
};

nextCircle=()=>{ 
 if (this.state.totalLives!==this.lives){
  return this.setState({
    totalLives:this.lives,
   }) ;
 }
 if (this.lives === 0){
   return this.stopHandler("Ohh! out of lives");
 }
 
 let nextActive;

  do{
    nextActive=getRntInteger(0,this.state.circles.length-1);
  }while(nextActive === this.state.current);

  this.setState({
    current:nextActive, 
    pace:this.state.pace * 0.95,
    round:this.state.round + 1,
  })
  this.lives = this.lives -1;
  this.timer=setTimeout(this.nextCircle,this.state.pace); 
};

startHandler=()=>{
  this.nextCircle();
  this.setState({
  gameOn: !this.state.gameOn,
});
  startGameSound.play();
};

stopHandler=()=>{
  clearTimeout(this.timer);
  this.setState({
    gameOver:{
      isGameOver:true,
      // message:message,
      
}
})
  
 startGameSound.pause();
}
closeHandler =()=>{
window.location.reload()
startGameSound.pause();
}

render() {
 
    return (
      <div className="game">
        <h1>SpeedGame</h1>
        <div>
          <Heart text={this.state.totalLives}></Heart> </div>
        <span>Score:{this.state.score}</span>
       
        <div className="clickcircle">
          {this.state.circles.map((circle,i)=>(
          <Circle
          key ={i} 
          id ={i+1} 
          gameStatus = {this.state.gameOn}
          click={()=>this.changeHandler(i)}
          active={this.state.current=== i}/>
        ))}
        </div>
        
        {this.state.gameOver.isGameOver && (
        <GameOver 
        close={this.closeHandler}
        score={this.state.score}
        // message={this.state.gameOver.message}
        />
        ) }

        {this.state.gameOn ? (
        <button onClick={this.stopHandler} className="btn">End game</button>):(
          <button onClick={this.startHandler} className="btn">Start game</button>
        )}
    
      </div>  
    );
  }
}


export default App;
