import React, { useState } from "react";
import { Box } from "../Box/Box";
import { StyledBoxList } from "./StyledBoxList";

export const BoxList = () => {
  const [playground, setPlayground] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [player, setPlayer] = useState("x");
  return (
    <StyledBoxList>
      {playground?.map((box, boxNumber) => (
        <Box
          key={boxNumber}
          player={player}
          setPlayer={setPlayer}
          setPlayground={setPlayground}
          boxNumber={boxNumber}
        />
      ))}
    </StyledBoxList>
  );
};
