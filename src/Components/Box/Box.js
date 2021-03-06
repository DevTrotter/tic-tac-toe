import React, { useState, useEffect } from "react";
import { StyledBox } from "./StyledBox";
import { ImCross } from "react-icons/im";
import { BsFillRecordCircleFill } from "react-icons/bs";

export const Box = ({
  player,
  value,
  setPlayground,
  boxNumber,
  setPlayer,
  playground,
  checkWin,
  updateScoreboard,
  resetPlayground,
}) => {
  const [boxValue, setBoxValue] = useState();
  useEffect(() => {
    switch (value) {
      case "":
        return setBoxValue(null);
      case "x":
        return setBoxValue(<ImCross />);
      case "o":
        return setBoxValue(<BsFillRecordCircleFill />);
    }
  }, [playground]);

  const handleClick = () => {
    if (value === "") {
      const newPlayground = playground.map((box, i) =>
        i === boxNumber ? player : box
      );
      setPlayer(player === "x" ? "o" : "x");
      setPlayground(newPlayground);
      const playerWin = checkWin(player, newPlayground);
      if (newPlayground.indexOf("") === -1) {
        resetPlayground();
      }
      setTimeout(() => {
        if (playerWin) {
          resetPlayground();
          updateScoreboard(player);
          setPlayer(player === "x" ? "o" : "x");
        }
      }, 300);
    }
  };

  return <StyledBox onClick={handleClick}>{boxValue}</StyledBox>;
};
