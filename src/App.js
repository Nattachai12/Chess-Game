import "./App.css";
import React, { useState } from "react";
import Board from "./Board.jsx";

function App() {
  const [board, setBoard] = useState([""]);

  return (
    <div className="Wrap">
      <Board key={1} className="White" />
      {/* <button><img src= "../public/pnghut_chess-piece-queen-king-white-and-black-in-symbol.png" alt="HI"/></button> */}
    </div>
  );
}

export default App;
