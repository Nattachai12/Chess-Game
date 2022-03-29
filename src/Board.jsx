import React, { useState } from "react";
import { startingBoard, emptyBoard } from "./boardStart.js";

function Board() {
  const [board, setBoard] = useState(startingBoard);
  const [renderCount, setRender] = useState(1);
  const [active, setActive] = useState(0);

  const newArr = [];
  const sum = 0;
  const leftSideBoard = [1, 9, 17, 25, 33, 41, 49, 57];

  //active will store the number of the piece that we want to move
  //onClick
  //grab the button that you want (by className): identify what piece we want to move
  //match
  //where can it move
  function reRender(k) {
    let tracker = 0;

    for (let i = 0; i < k; i++) {
      if (board[i] === board[k]) {
        tracker++;
      }
    }
    //highlight the king
    //grab the button
    if (board[k] !== "White" && board[k] !== "Black") {
      const grabButton = document.getElementsByClassName(board[k]);
      grabButton[tracker].style.borderColor = "red";
      grabButton[tracker].style.borderWidth = "4px";

      setActive(k);
      // console.log(grabButton[0].style);
      //update the style
      // setBoard(board.map((el,j,arr) => j === k ?  "hover" : el));

      setRender(0);
      // console.log(k);
    }
  }
  //if there is a piece blocking the path
  //rook (on1)
  //2 -8
  //1 + 8
  //rook, pawn with collision
  function reRender2(i) {
    if (
      board[i] !== "whiteKing" &&
      board[i] !== "greenKing" &&
      board[i] !== "whitePawn" &&
      board[i] !== "greenPawn" &&
      board[i] !== "whiteBishop" &&
      board[i] !== "greenBishop" &&
      board[i] !== "whiteRook" &&
      board[i] !== "greenRook"
    ) {
      //if whiteKing or greenKing is active
      if (board[active] === "whiteKing" || board[active] === "greenKing") {
        //if king is in the middle of the board
        if (active % 8 !== 0 && !leftSideBoard.includes(active)) {
          if (
            i === active - 1 ||
            i === active + 1 ||
            i === active + 7 ||
            i === active + 8 ||
            i === active + 9 ||
            i === active - 7 ||
            i === active - 8 ||
            i === active - 9
          ) {
            setBoard(
              board.map((el, j, arr) =>
                i === active
                  ? el
                  : j === active
                  ? emptyBoard[j]
                  : i !== j
                  ? el
                  : emptyBoard[j] === "White"
                  ? "whiteKing"
                  : "greenKing"
              )
            );
          }
        }
        //if king is in the left side the board
        if (leftSideBoard.includes(active)) {
          if (
            i === active + 1 ||
            i === active + 9 ||
            i === active + 8 ||
            i === active - 8 ||
            i === active - 7
          ) {
            setBoard(
              board.map((el, j, arr) =>
                i === active
                  ? el
                  : j === active
                  ? emptyBoard[j]
                  : i != j
                  ? el
                  : emptyBoard[j] === "White"
                  ? "whiteKing"
                  : "greenKing"
              )
            );
          }
        }
        //if king is in the right side the board
        if (active % 8 === 0) {
          if (
            i === active - 1 ||
            i === active - 8 ||
            i === active - 9 ||
            i === active + 7 ||
            i === active + 8
          ) {
            setBoard(
              board.map((el, j, arr) =>
                i === active
                  ? el
                  : j === active
                  ? emptyBoard[j]
                  : i != j
                  ? el
                  : emptyBoard[j] === "White"
                  ? "whiteKing"
                  : "greenKing"
              )
            );
          }
        }
        //-1, -8,-9, +7, +8
      }
      //bishop
      if (board[active] === "whiteBishop" || board[active] === "greenBishop") {
        //if king is in the left side the board

        if (leftSideBoard.includes(active)) {
          const bishopLeftMovement = [];
          //generate an array of the possible movement (bishopMovement), set it to empy array

          //for loop each possibility annd push it to bishopMovement
          for (let i = active; i < 65; i += 9) {
            bishopLeftMovement.push(i);
          }
          for (let i = active; i > 0; i -= 7) {
            bishopLeftMovement.push(i);
          }
          if (bishopLeftMovement.includes(i)) {
            setBoard(
              board.map((el, j, arr) =>
                i === active
                  ? el
                  : j === active
                  ? emptyBoard[j]
                  : i != j
                  ? el
                  : emptyBoard[j] === "White"
                  ? "whiteBishop"
                  : "greenBishop"
              )
            );
          }
        }
        //if king is in the right side the board
        else if (active % 8 === 0) {
          const bishopRightMovement = [];
          for (let i = active; i > 0; i -= 9) {
            bishopRightMovement.push(i);
          }
          for (let i = active; i < 65; i += 7) {
            bishopRightMovement.push(i);
          }
          if (bishopRightMovement.includes(i)) {
            setBoard(
              board.map((el, j, arr) =>
                i === active
                  ? el
                  : j === active
                  ? emptyBoard[j]
                  : i != j
                  ? el
                  : emptyBoard[j] === "White"
                  ? "whiteBishop"
                  : "greenBishop"
              )
            );
          }
        }
        //if bishop is in the middle of the board
        else {
          const bishopMiddleMovement = [];
          for (let i = active; i < 65; i += 9) {
            bishopMiddleMovement.push(i);
          }
          for (let i = active; i < 65; i += 7) {
            bishopMiddleMovement.push(i);
          }
          for (let i = active; i > 0; i -= 9) {
            bishopMiddleMovement.push(i);
          }
          for (let i = active; i > 0; i -= 7) {
            bishopMiddleMovement.push(i);
          }
          if (bishopMiddleMovement.includes(i)) {
            setBoard(
              board.map((el, j, arr) =>
                i === active
                  ? el
                  : j === active
                  ? emptyBoard[j]
                  : i != j
                  ? el
                  : emptyBoard[j] === "White"
                  ? "whiteBishop"
                  : "greenBishop"
              )
            );
          }
        }
      }
      if (board[active] === "whitePawn" || board[active] === "greenPawn") {
        if (board[i] === "White" || board[i] === "Black") {
          if (Math.ceil(active / 8) == 2) {
            if (i === active + 8) {
              setBoard(
                board.map((el, j, arr) =>
                  i === active
                    ? el
                    : j === active
                    ? emptyBoard[j]
                    : i != j
                    ? el
                    : emptyBoard[j] === "White"
                    ? "whitePawn"
                    : "greenPawn"
                )
              );
            }
            if (i === active + 16) {
              if (
                board[active + 8] === "Black" ||
                board[active + 8] === "White"
              ) {
                setBoard(
                  board.map((el, j, arr) =>
                    i === active
                      ? el
                      : j === active
                      ? emptyBoard[j]
                      : i != j
                      ? el
                      : emptyBoard[j] === "White"
                      ? "whitePawn"
                      : "greenPawn"
                  )
                );
              }
            }
          }

          if (i === active + 8) {
            setBoard(
              board.map((el, j, arr) =>
                i === active
                  ? el
                  : j === active
                  ? emptyBoard[j]
                  : i != j
                  ? el
                  : emptyBoard[j] === "White"
                  ? "whitePawn"
                  : "greenPawn"
              )
            );
          }
        }
        if (active + 7 === i || active + 9 === i) {
          console.log("hi");
          if (board[i] != "White" && board[i] != "Black") {
            setBoard(
              board.map((el, j, arr) =>
                i === active
                  ? el
                  : j === active
                  ? emptyBoard[j]
                  : i != j
                  ? el
                  : emptyBoard[j] === "White"
                  ? "whitePawn"
                  : "greenPawn"
              )
            );
          }
        }
        // if (board[i+9] != "White" || board[i+9] != "Black"){
        // setBoard(board.map((el,j,arr) => i === active ? el: j === active  ? emptyBoard[j]  : i != j ? el : emptyBoard[j] === 'White' ? 'whitePawn' : 'greenPawn' ));
        //   }
      }

      //bishop
      //   if (board[active]=== 'whiteBishop' || board[active]==='greenBishop' ) {
      //     //nas long as absolute of (i - active) is divisible by 9 or divisible by 7
      //     if (i ===  ){
      //     if( Math.abs(i - active) % 9 === 0 || Math.abs(i - active) % 7 === 0) {
      //        setBoard(board.map((el,j,arr) => i === active ? el: j === active  ? emptyBoard[j]  : i != j ? el : emptyBoard[j] === 'White' ? 'whiteBishop' : 'greenBishop' ));
      //     }
      //   }
      // }
      //rook

      //if whiteKing or greenKing is active
      if (board[active] === "whiteRook" || board[active] === "greenRook") {
        let collision = 0;
        let collision2 = 0;
        //if king is in the middle of the board\

        if (i > active && i - active > 1) {
          for (let p = active + 1; p < i; p++) {
            if (board[p] != "White" && board[p] != "Black") {
              collision++;
              console.log(board[p]);
            }
          }
        }
        if (i < active && active - i > 1) {
          for (let p = i + 1; p < active; p++) {
            if (board[p] != "White" && board[p] != "Black") {
              collision++;
              console.log(board[p]);
            }
          }
        }

        if (i > active && i - active > 8) {
          for (let p = active + 8; p < i; p += 8) {
            if (board[p] != "White" && board[p] != "Black") {
              collision2++;
              console.log(parseFloat);
            }
          }
        }
        if (i < active && active - i > 8) {
          for (let p = i + 8; p < active; p += 8) {
            if (board[p] != "White" && board[p] != "Black") {
              collision2++;
              console.log(p);
            }
          }
        }

        console.log(collision2);
        if (Math.abs(i - active) % 8 === 0 && collision2 === 0) {
          setBoard(
            board.map((el, j, arr) =>
              i === active
                ? el
                : j === active
                ? emptyBoard[j]
                : i != j
                ? el
                : emptyBoard[j] === "White"
                ? "whiteRook"
                : "greenRook"
            )
          );
        }

        if (Math.ceil(i / 8) === Math.ceil(active / 8) && collision === 0) {
          setBoard(
            board.map((el, j, arr) =>
              i === active
                ? el
                : j === active
                ? emptyBoard[j]
                : i != j
                ? el
                : emptyBoard[j] === "White"
                ? "whiteRook"
                : "greenRook"
            )
          );
        }
        //Center
        //
      }

      //if i is allowed     -1, +1, +7, +8, +9, -7, -8, -9

      //if active is divisible by 8, you can

      setRender(1);
      let tracker = 0;

      for (let i = 0; i < active; i++) {
        if (board[i] === board[active]) {
          tracker++;
        }
      }

      const grabButton = document.getElementsByClassName(board[active]);
      grabButton[tracker].style.borderColor = "grey";
      grabButton[tracker].style.borderWidth = "4px";
      // setBoard(board.map((el,j,arr) => i === active ? el: j === active  ? emptyBoard[j]  : i != j ? el : emptyBoard[j] === 'White' ? 'whiteKing' : 'greenKing' ));
    }
  }
  //change the className of the button to wither black or white

  if (renderCount === 1) {
    for (let i = 1; i < board.length; i++) {
      newArr.push(
        <button
          id={i}
          onClick={() => reRender(i)}
          className={board[i]}
        ></button>
      );
    }
  } else {
    for (let i = 1; i < board.length; i++) {
      newArr.push(
        <button
          id={i}
          onClick={() => reRender2(i)}
          className={board[i]}
        ></button>
      );
    }
  }

  //onClick => re - render (update the state, you just to map the state), button that the piece can be moved will have a green border

  //
  //onClick on the piece, it should return all the possible
  //if (activePiece) {

  //if (possibleMoveButton) {

  //}
  //
  //start a for loop to look for all possible movement <--
  //

  return <div>{newArr}</div>;
}

export default Board;
