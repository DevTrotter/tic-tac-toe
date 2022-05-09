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

export const BoxList = () => {
  const [playground, setPlayground] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("x");

  return (
    <StyledBoxList>
      {playground?.map((box, boxNumber) => (
        <Box
          key={boxNumber}
          player={player}
          setPlayer={setPlayer}
          playground={playground}
          setPlayground={setPlayground}
          boxNumber={boxNumber}
          checkWin={checkWin}
        />
      ))}
    </StyledBoxList>
  );
};
