"use client";

import { useState } from "react";

function Square({ value, onClick}){
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

function Board(){

  const [squares, serSquares] = useState(Array(9).fill(null))
  function onSquareClick (){

  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onClick={()=> onSquareClick(0)}/>
        <Square value={squares[1]} onClick={()=> onSquareClick(1)}/>
        <Square value={squares[2]} onClick={()=> onSquareClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={()=> onSquareClick(3)}/>
        <Square value={squares[4]} onClick={()=> onSquareClick(4)}/>
        <Square value={squares[5]} onClick={()=> onSquareClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={()=> onSquareClick(6)}/>
        <Square value={squares[7]} onClick={()=> onSquareClick(7)}/>
        <Square value={squares[9]} onClick={()=> onSquareClick(8)}/>
      </div>
    </>
  )
}


export default function Game(){
  return (
    <div>
      <Board />
    </div>
  )
}


