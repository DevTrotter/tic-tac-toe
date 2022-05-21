import React, { useState } from "react";
import { Box } from "../Box/Box";
import { StyledBoxList } from "./StyledBoxList";

const checkWin = (player, playground) => {
  return (
    (playground[0] === player &&
      playground[3] === player &&
      playground[6] === player) ||
    (playground[1] === player &&
      playground[4] === player &&
      playground[7] === player) ||
    (playground[2] === player &&
      playground[5] === player &&
      playground[8] === player) ||
    (playground[0] === player &&
      playground[4] === player &&
      playground[8] === player) ||
    (playground[2] === player &&
      playground[4] === player &&
      playground[6] === player) ||
    (playground[0] === player &&
      playground[1] === player &&
      playground[2] === player) ||
    (playground[3] === player &&
      playground[4] === player &&
      playground[5] === player) ||
    (playground[6] === player &&
      playground[7] === player &&
      playground[8] === player)
  );
};

export const BoxList = ({ updateScoreboard }) => {
  const [playground, setPlayground] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("x");

  const resetPlayground = () => {
    const voidArray = Array(9).fill("");
    setPlayground(voidArray);
    setPlayer(player);
  };

  return (
    <StyledBoxList>
      {playground.map((value, boxNumber) => (
        <Box
          key={boxNumber}
          value={value}
          player={player}
          setPlayer={setPlayer}
          playground={playground}
          setPlayground={setPlayground}
          boxNumber={boxNumber}
          checkWin={checkWin}
          updateScoreboard={updateScoreboard}
          resetPlayground={resetPlayground}
        />
      ))}
    </StyledBoxList>
  );
};
