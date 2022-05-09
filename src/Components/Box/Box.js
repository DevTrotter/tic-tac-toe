import React, { useState } from "react";
import { StyledBox } from "./StyledBox";
import { ImCross } from "react-icons/im";
import { BsFillRecordCircleFill } from "react-icons/bs";

export const Box = ({
  player,
  setPlayground,
  boxNumber,
  setPlayer,
  playground,
  checkWin,
}) => {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    const newPlayground = playground.map((box, i) =>
      i === boxNumber ? player : box
    );
    const icon = player === "x" ? <ImCross /> : <BsFillRecordCircleFill />;
    setValue(icon);
    setPlayer(player === "x" ? "o" : "x");
    setPlayground(newPlayground);
    const playerWin = checkWin(player, newPlayground);
    setTimeout(() => {
      if (playerWin) alert(`Player ${player.toUpperCase()} is win !`);
    }, 1000);
  };

  return <StyledBox onClick={handleClick}>{value}</StyledBox>;
};
